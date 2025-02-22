// Components
import { Col } from "../../components/LayoutBlocks/LayoutBlocks";
import {
  ProjectImageContainer,
  RolesList,
  SectionContainer,
  SectionHeading,
  SkillsList,
} from "../../components/ProjectPageContainer/ProjectPageContainer";
import ProjectPageContainer from "../../components/ProjectPageContainer/ProjectPageContainer";
import ImageLoadingContainer from "../../components/ImageLoadingContainer/ImageLoadingContainer";
import { LinkList } from "../../components/ProjectPageContainer/ProjectPageContainer";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import AnimationContainer from "../../components/AnimationContainer/AnimationContainer";

// Images
import banner from "../../assets/img/drawfour/JerrelLustre-dropfour-banner.webp";
import lobby from "../../assets/img/drawfour/JerrelLustre-dropfour-lobby.webp";
import myTurn from "../../assets/img/drawfour/JerrelLustre-dropfour-myTurnScreen.webp";
import otherTurn from "../../assets/img/drawfour/JerrelLustre-dropfour-otherPlayersTurnScreen.webp";

export default function DrawFour() {
  const githubLink = "https://github.com/JerrelLustre/drop-four-reactJS";
  const liveLink = "https://dropfour.jerrellustre.com/";

  const projectDetails = {
    "project-title": "DrawFour ReactJS Game",
    "project-status": "Finished",
    "github-link": { githubLink },
    "live-site-link": { liveLink },
  };

  const techAndSkills = [
    "ReactJS",
    "PeerJS",
    "P2P Networking",
    "Writing Game Logic",
    "UI/UX",
  ];

  const team = [
    {
      type: "me",
      member: "Jerrel Lustre - Site Developer",
    },
  ];

  const setPieceCode = ` 

   /*Update game board 
   when user makes a move*/

  function setPiece(colPos) {
    // Enabled in situations
    // where the player
    // shouldn't be allowed 
    // to update the board
    if (gamestate === false) {
      return;
    }
    // Enabled when its 
    // not the player's turn
    if (isMyTurn === false) {
      return;
    }

    // Decide the piece's 
    // color value based on player state
    let value = playerColors[playerState - 1];

    // Create a copy of 
    // the current board state
    const newBoard = [...board];

    // When clicking on a column, 
    // start at the bottom-most row and
    // check if its filled. 
    // If not, change the value and 
    // break the loop
    for (let r = rows - 1; r >= 0; r--)
      if (!newBoard[r][colPos]) {
        newBoard[r][colPos] = value;
        break;
      }

    // Update the board state 
    // with the new array
    setBoard(newBoard);

    // check for win conditions, 
    // if so set playerHasWon to true
    if (checkBoardState(board, value)) {
      handlePlayerWin();
      peerConnection.send(
        {
          board: board,
          playerHasWon: true,
          winningPlayer: playerState,
        },
        (error) => {
          setErrorState(true);
          setErrorMsg(
            error + "Connection error occurred. Returning to lobby"
          );
        }
      );
      return;
    }

    // check for tie conditions, 
    // if so set gameIsTied to true
    const nullCheck = board
      .flatMap((row) => row)
      .every((item) => item !== null);
    if (nullCheck) {
      setGamestate(false);
      setGameIsTied(true);
      peerConnection.send(
        {
          board: board,
          gameIsTied: true,
        },
        (error) => {
          setErrorState(true);
          setErrorMsg(
            error + "Connection error + 
          
        }
      return;
    }

    // Switch to next player
    let nextPlayer = playerState === 1 ? 2 : 1;

    // Change to the color 
    // of the next player
    setPlayerState(nextPlayer);
    sendBoardData(board, nextPlayer);
  }`;

  const sendDataCode = `
/*Send updated board
 data to the peer*/
  function sendBoardData(board, nextPlayer) {
    // Disable this page's user
    // from placing additonal pieces
    setIsMyTurn(false);

    // Send the board and 
    // player state data to the peer
    peerConnection.send(
      {
        sentBoardData: true,
        board: board,
        playerState: nextPlayer,
        setYourTurn: true,
      },
      (error) => {
        setErrorState(true);
        setErrorMsg(error + 
        "Connection error occurred. Returning to lobby");
      }
    );
  }`;

  const checkWinConditionCode = `
  /* Check for win condition 
  (four same pieces side by side) */
  function checkBoardState(board, player) {
    // Check horizontal
    // Repeat for every row in the board
    for (let row = 0; 
    row < board.length; row++) {
      // Repeat for every column, -4 is needed as
      // it would be impossible to win 
      // horizontally starting from 
      // the 3rd column (or col[2])
      for (let col = 0; 
      col <= board[row].length - 4; col++) {
        if (
          board[row][col] === player &&
          board[row][col + 1] === player &&
          board[row][col + 2] === player &&
          board[row][col + 3] === player
        ) {
          return true;
        }
      }
    }

    // Check vertical
    // Repeat for every column
    for (let col = 0; 
    col < board[0].length; col++) {
      // Repeat for every row, 
      // -4 is needed as it 
      // would be impossible 
      // to win vertically
      // due to not having enough spaces
      for (let row = 0; row <= board.length - 4; row++) {
        if (
          board[row][col] === player &&
          board[row + 1][col] === player &&
          board[row + 2][col] === player &&
          board[row + 3][col] === player
        ) {
          return true;
        }
      }
    }

    // Check diagonals
    for (let row = 0; 
    row <= board.length - 4; row++) {
      for (let col = 0; 
      col <= board[row].length - 4; col++) {
        // Check upward diagonal
        if (
          board[row][col] === player &&
          board[row + 1][col + 1] === player &&
          board[row + 2][col + 2] === player &&
          board[row + 3][col + 3] === player
        ) {
          return true;
        }

        // Check downward diagonal
        if (
          board[row][col + 3] === player &&
          board[row + 1][col + 2] === player &&
          board[row + 2][col + 1] === player &&
          board[row + 3][col] === player
        ) {
          return true;
        }
      }
    }

    return false;
  }`;

  const handleReceivingDataCode = `
  /*  Handler for when we 
  receive data from a peer */
  
  useEffect(() => {
    if (peer === null) {
      return;
    }
    peer.on("connection", function (conn) {
      conn.on("data", function (data) {
        // Runs when receiving board data
        if (data.sentBoardData === true) {
          setBoard(data.board);
          setPlayerState(data.playerState);
          setIsMyTurn(data.setYourTurn);
          return;
        }

        // Runs only on 
        // initial connection
        if (data.initialConnect === true) {
          let conn = peer.connect(data.id);
          conn.on("open", function () {
            setPeerConnection(conn);
          });
          setShowGame(true);
          setAllowConnectionButton(false);
          createEmptyBoard(rows, columns);
          return;
        }

        // Runs if the data 
        // says a player has won
        if (data.playerHasWon === true) {
          setBoard(data.board);
          setPlayerState(data.winningPlayer);
          handlePlayerWin();
          return;
        }

        // Runs if the data 
        // says to reset the game
        if (data.resetGame === true) {
          setIsMyTurn(true);
          setBoard(createEmptyBoard(rows, columns));
          setGamestate(true);
          setGameWin(false);
          return;
        }

        // Runs if the data
        // says a player has won
        if (data.gameIsTied === true) {
          setBoard(data.board);
          setGameIsTied(true);
          setGamestate(false);
          return;
        }

        return;
      });
    });
  }, [peer]);`;

  return (
    <AnimationContainer>
      <ProjectPageContainer>
        <SectionContainer>
          {/* Banner */}
          <Col className={"w-full"}>
            <SectionHeading title={projectDetails["project-title"]} level={1} />

            <ImageLoadingContainer>
              <img src={banner} alt="Collage of the game's different screens" />
            </ImageLoadingContainer>
          </Col>
          <Col className={"w-full mt-12 lg:flex md:leading-7"}>
            <div className="lg:w-full">
              <SectionHeading title="Intro" />
              In order to get a better understanding of working with ReactJS, I
              decided to develop a project that would challenge me in some way.
              I settled on recreating the game{" "}
              <a
                className="underline"
                href="https://en.wikipedia.org/wiki/Connect_Four"
                target="_blank"
                title="Connect-Four Wikipedia page"
              >
                “Connect Four”
              </a>{" "}
              with the added functionality of being able to play with friends
              online.
              <p className="mt-4">
                I chose this project because not only would developing the
                game’s handling and logic require me to work more closely withF
                React’s hook and states, it would also require me to think about
                how I would handle and implement peer-to-peer networking.
              </p>
              <p className="mt-4">
                If you would like to try the game yourself, simply open up the
                game using the live site link and simulate two players by
                passing the lobby code between two different browser tabs.
              </p>
              <div className="lg:flex mt-10 lg:gap-12">
                <SkillsList list={techAndSkills} />
                <RolesList list={team} />
                <LinkList liveLink={liveLink} githubLink={githubLink} />
              </div>
            </div>
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 md:flex md:leading-7 overflow-clip"}>
            {/* need an extra div here because sticky cannot have an immediate parent with flex */}
            <div className="md:w-1/2 ">
              <div className=" md:sticky md:h-screen md:overflow-auto top-20 md:pb-20 md:pr-4">
                <SectionHeading title="PeerJS Board Sync & Game Logic Handling" />
                <p className="mb-8">
                  In order to implement P2P (peer-to-peer) networking, I used
                  PeerJS to handle sending data between two users who were
                  connected. The challenge was developing code for the game’s
                  logic while also making sure that the game stayed synced
                  between players. Here was my solution:
                </p>
                <ol
                  type="1"
                  className="list-decimal list-inside flex flex-col gap-4 mb-8"
                >
                  <li>
                    <b>Establishing Connection:</b>
                    <br />
                    When connection is established, the player who attempted to
                    connect has their "isMyTurn" state set to false, removing
                    their ability to place a piece. Since this state is "true"
                    by default, this means that the user who was connected to
                    will be the first to set a piece.
                  </li>
                  <li>
                    <b>Updating Board:</b>
                    <br />
                    When a user sets a piece, their board is updated to show the
                    piece's position, and their ability to place another piece
                    is disabled.
                  </li>
                  <li>
                    <b>Syncing Boards:</b>
                    <br />
                    The client then sends the board data to the other user to
                    update their board, effectively syncing the board between
                    the two users. The receiving of this data also means that
                    the sender finished their turn, so the receiver's "turn"
                    state is set to true, and they are given the ability to set
                    a piece.
                  </li>
                  <li>
                    <b>Game Progression:</b>
                    <br />
                    Both players continue to alternate placing pieces until the
                    checkBoardState function returns true. This check returns
                    true if it finds that 4 pieces of the same color are lined
                    up in a row, column, or diagonally across. When this check
                    returns true, the game is won, the ability to set pieces is
                    disabled for both players, and the winning player is stated
                    on top of the screen.
                  </li>
                  <li>
                    <b>Restarting the Game:</b>
                    <br />
                    Both users are then given the option to repeat the game. The
                    user that first clicks that option gives up their first move
                    and the other user moves first instead. Both users' boards
                    are then reset, starting the game anew.
                  </li>
                </ol>
              </div>
            </div>

            <div className="flex flex-col gap-y-4 md:w-1/2 items-center md:items-start overflow-hidden">
              <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-full">
                <div>
                  <CodeBlock code={setPieceCode} />
                </div>
                <div>
                  <CodeBlock code={checkWinConditionCode} />
                </div>
                <div>
                  <CodeBlock code={sendDataCode} />
                </div>
              </div>
            </div>
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 md:leading-7"}>
            <div className=" md:pr-4">
              <SectionHeading title="Setting Flags to Handle Data" />
              <p className="mb-8">
                I also had several “flags” in place for whenever a user received
                data. This meant that whenever data was sent, a “flag” was
                included that specified what kind of data was being sent and so
                the game also knew what corresponding code it had to run to
                handle it. For example, if I sent data that said the user wanted
                to reset the game, the receiving user’s client would know to
                reset the board.{" "}
              </p>
              <p className="mt-4">
                Similarly, whenever a player placed a piece, their client would
                send data that contained where each piece was placed to the
                other user’s client. This data would include a “sentBoardData”
                flag that would tell the receiving user to look for “board data”
                in the received data and then update their own board with it,
                thus syncing the two boards between the users.
              </p>
            </div>
            <div className="flex flex-col gap-y-4 md:w-1/2 mt-6 items-center md:items-start overflow-hidden">
              <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-full">
                <CodeBlock code={handleReceivingDataCode} />
              </div>
            </div>
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 md:leading-7"}>
            <div className="">
              <SectionHeading title="Code Organization & User-Friendly Design" />
              <p className="mb-8">
                I made sure to also organize code and implement good UI/UX
                practices to the best of my ability:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-4 mb-8">
                <li>
                  <b>Code Organization:</b>
                  <br />
                  The code's functionality is well-documented with comments, and
                  I've structured it into separate components for game logic and
                  rendering. This separation makes the codebase easier to
                  understand and come back to in the future.
                </li>
                <li>
                  <b>Hook Organization:</b>
                  <br />
                  To improve code readability and maintainability, grouping
                  related hooks together, using clear and descriptive names for
                  hooks, and following a consistent naming convention.
                </li>
                <li>
                  <b>Color-Coded Messages:</b>
                  <br />
                  The game’s messages saying whose turn it is are color-coded to
                  the board’s pieces, allowing users to intuitively figure out
                  which color belongs to who.
                </li>
                <li>
                  <b>"Its Your Turn!" Animation:</b>
                  <br />A special animation plays whenever it's the user’s turn,
                  making it easier to know when a user is allowed to set a
                  piece.
                </li>
                <li>
                  <b>Responsive Design:</b>
                  <br />
                  The design was made responsive, allowing users to play this
                  game across different devices and screen types.
                </li>
                <li>
                  <b>Clean Interface:</b>
                  <br />I ensured the interface was clean and simple, enabling
                  users to scan the app and understand the state of the game
                  more easily.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2 md:flex-row md:flex-wrap justify-center items-center">
              <ProjectImageContainer
                className={"md:basis-1/2"}
                image={lobby}
                alt="Lobby screen of the game"
              />
              <ProjectImageContainer
                className={"md:basis-1/2"}
                image={myTurn}
                alt="Game screen during a player's turn"
              />
              <ProjectImageContainer
                className={"md:basis-1/2"}
                image={otherTurn}
                alt="Game screen while waiting for the other player to finish their turn"
              />
            </div>
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12  md:leading-7"}>
            <div className="">
              <SectionHeading title="Lessons Learned & Experience gained" />
              <p className="mb-8">
                During this project's development, I encountered various
                challenges and opportunities for learning. Here, I outline some
                of the key lessons I learned:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-4 mb-8">
                <li>
                  <b>ReactJS Proficiency:</b>
                  <br />
                  Through developing the Connect Four game, I deepened my
                  understanding of ReactJS, particularly in managing state with
                  hooks and handling component interactions.
                </li>
                <li>
                  <b>Peer-to-Peer Networking Challenges:</b>
                  <br />
                  Implementing PeerJS for peer-to-peer networking presented
                  challenges in syncing game states between players. I learned
                  to manage state updates effectively to keep both players in
                  sync during gameplay.
                </li>
                <li>
                  <b>Code Organization:</b>
                  <br />
                  Organizing the code into separate components for game logic
                  and rendering proved essential for maintainability. I
                  prioritized clear documentation with comments to enhance code
                  readability and ease future development.
                </li>
                <li>
                  <b>UI/UX Implementation:</b>
                  <br />
                  Incorporating good UI/UX practices enhanced the user
                  experience. Color-coded messages indicating whose turn it is
                  and a special animation for when its the user's turn improved
                  intuitiveness. Additionally, making the design responsive
                  allowed for seamless gameplay across various devices and
                  screen sizes.
                </li>
              </ul>
            </div>
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 md:flex md:leading-7"}>
            <div className="">
              <SectionHeading title="Future Plans & Conclusion" />
              <p className="">
                Thank you for taking the time to read about my Connect Four
                project in ReactJS. Developing this game has been a rewarding
                experience, allowing me to deepen my understanding of ReactJS,
                peer-to-peer networking, and UI/UX design. I've learned valuable
                lessons in code organization, state management, and user
                interface design, which I look forward to applying in future
                projects.
              </p>
              <p className="mt-4">
                While I focused on implementing core functionality within the
                project's timeframe, I have plans to further enhance the game in
                the future. This includes adding additional animations,
                implementing the ability to choose who starts the turn,
                dedicating more time to testing the application for errors, and
                gathering feedback to improve the overall user experience.{" "}
              </p>
              <p className="mt-4">
                Overall, this project has been a great learning experience, and
                I am excited to continue refining and expanding my skills as a
                web developer. Thank you again for your interest in my project.
              </p>
            </div>
          </Col>
        </SectionContainer>
      </ProjectPageContainer>
    </AnimationContainer>
  );
}
