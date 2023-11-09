import {
  Cmd,
  HeroContainer,
  // Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`

              ██████╗  █████╗ ███╗   ██╗██╗            
              ██╔══██╗██╔══██╗████╗  ██║██║            
              ██║  ██║███████║██╔██╗ ██║██║            
              ██║  ██║██╔══██║██║╚██╗██║██║            
              ██████╔╝██║  ██║██║ ╚████║██║            
              ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝            
                                                      
          ███████╗ ██████╗ ███████╗███████╗██████╗ 
          ██╔════╝██╔═══██╗██╔════╝██╔════╝██╔══██╗
          ███████╗██║   ██║█████╗  █████╗  ██████╔╝
          ╚════██║██║   ██║██╔══╝  ██╔══╝  ██╔══██╗
          ███████║╚██████╔╝██║     ███████╗██║  ██║
          ╚══════╝ ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═╝
                                                  

            `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`

╔╦╗┌─┐┌┐┌┬  ╔═╗┌─┐┌─┐┌─┐┬─┐
 ║║├─┤││││  ╚═╗│ │├┤ ├┤ ├┬┘
═╩╝┴ ┴┘└┘┴  ╚═╝└─┘└  └─┘┴└─
          
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.2.0)</div>
        <Seperator>----</Seperator>
        {/* <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/satnaing/terminal-portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator> */}
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                      
                                             
                      .::^^!?J7!^:                     
                      .~?5GGPP55PGBBGG5J~                  
                      :?5PPPP555PPPPPPGGB5J!.              
                    .?PGGGGGPP555PPPPGGB##B5?:             
                   :PBBBBBGGGPPPPGGBB#BBPBG5GP!            
                   ^~G##BP55GBBBGGP5Y?!~^7GPG57            
                     5BBG~^~!!~~~^^^^^:^^^YBGY^            
                     !G#G~^^^^^^^^^^^^^^^^Y#PJ             
                     .5#YJ5PPPP?^^^~5PPP5J?BG!             
                    !??G?7YPGBP?~^^!YPGB5J75Y7?.           
                   .YJJYY!77PG7~~^^~~JG5!?7P?JY!           
                    7?JYG7^^^^:^^^^^:^^^^^55Y7?:           
                     ~77Y5!^^^^~7!7!^^^^~JP?7!:            
                       ..YY77?777??77??!J5!                
                         :J55Y~~!!!~^7555!                 
                           ~5PYJJJJJJ5P?.                  
                          ~JG555555555GY7.                 
                        :?JJGJ??JJJJ?7P5JJ~.               
                   .^!7?57~~PY~~!!!~~7P?!~J57!~:.          
                 ~??77?5?777JG5??7??JG5?!!~5J??JY7.        
                 :^~!!?PY55PP?G5YYYYP5JG55YPY7!!~:.        
                       .:::~~:!?!!!7?^^!^::..              
                                                      
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
