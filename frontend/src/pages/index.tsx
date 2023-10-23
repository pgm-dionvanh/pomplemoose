import { useState } from "react";
import ChooseUs from "../components/Banners/Chooseus";
import FeaturedBanners from "../components/Banners/Featured";
import HomeBanner from "../components/Banners/Homebanner";
import { Layout } from "../components/Layout";
import JustForYou from "../components/Products/Justforyou";
import ReactJoyride, { EVENTS, CallBackProps, STATUS, ACTIONS, Step  } from "react-joyride";
import { useSetState } from 'react-use';

interface State {
    run: boolean;
    stepIndex: number;
    steps: Step[];
  }

export default function Home() {
    const [{ run, stepIndex, steps }, setState] = useSetState<State>({
        run: true,
        stepIndex: 0,
        steps: [
            {
                title: "Welcome",
                content: `Welcome to Pomplemoose! We create clothing that is ethically sourced, made with
                sustainable materials, and is Green business certified! Now let’s run through the main
                features of this website!`,
                target: "body",
                placement: "center"
              },
              {
                title: "Sign up",
                content: "If it’s your first time here, click here to create an account.",
                target: "#Sign_up",
                placement: "top"
              },
              {
                title: "Sign in",
                content: "If you already have an account with us, click here to sign in.",
                target: "#Sign_in",
                placement: "top"
              },
              {
                title: "Navigation",
                content: "Click any of these tabs to start shopping for items.",
                target: "#intro_menu"
              },
              {
                title: "Search",
                content: "Or use this search bar to find items.",
                target: "#search_intro",
                placement: "top"
              },
        ],
    });

    const handleJoyrideCallback = (data: CallBackProps) => {
        const { action, index, status, type } = data;
        console.log({ type, status, action, data });
        const nextStepIndex = index + (action === ACTIONS.PREV ? -1 : 1);

        if (([STATUS.FINISHED, STATUS.SKIPPED] as string[]).includes(status)) {
            // Need to set our running state to false, so we can restart if we click start again.
            setState({ run: false, stepIndex: 0 });        
        } else if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
            setState({ stepIndex: nextStepIndex });
        }if(status === STATUS.FINISHED){
            setState({ run: false });

            localStorage.setItem('intro', 'false');
        }
        if (action === 'close' && type === 'step:after') {
            setState({ run: false });
            localStorage.setItem('intro', 'false');
        }
        console.log(status);
    }
    
    const introDash = localStorage.getItem('intro');

    return (
    <Layout title="Pomplemoose - Home">
        <HomeBanner/>
        <FeaturedBanners/>
        <ChooseUs/>
        <JustForYou/>
        { introDash ? null :  <ReactJoyride
        run={run}
        steps={steps}
        stepIndex={stepIndex}
        debug
        continuous
        showSkipButton
        showProgress
        callback={handleJoyrideCallback}
        styles={{
          options: {
            zIndex: 10000
          }
        }}
      /> }

    </Layout>
    )
}