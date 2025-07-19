import { useUser } from '@clerk/clerk-react';
import {  Navigate} from 'react-router-dom';


function ProtectedRoute({children}) {
    const {isSignedIn} = useUser()
    
    
    
    return isSignedIn ? children : <Navigate to={"/"} />
}

export default ProtectedRoute;