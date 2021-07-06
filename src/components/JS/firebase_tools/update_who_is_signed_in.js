// import signedin from './store/signedin'
import signedin from '../store/signedin'

const update_who_is_signed_in = (username) =>
        signedin.update((lastSignedIn) => username);

export default update_who_is_signed_in