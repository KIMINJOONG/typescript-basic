{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(resourceLoadState: ResourceLoadState): void {
    if(resourceLoadState.state === 'loading') {
      console.log('👀 loading...');
    } else if(resourceLoadState.state === 'success') {
      console.log(`😃 loaded`);
    } else if(resourceLoadState.state === 'fail') {
      console.log('😱 no network');
    } else {
      throw new Error(`unknown resourceLoadState: ${resourceLoadState}`);
    }
  }

  function teacherPrintLoginState(state: ResourceLoadState) {
    switch(state.state) {
      case 'loading':
        console.log('loading...');
        break;
      case 'success':
        console.log(`😃 ${state.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${state.reason}`);
        break;
      default:
        throw new Error(`unknown state: ${state}`);
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
