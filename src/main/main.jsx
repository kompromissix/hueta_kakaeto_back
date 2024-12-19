import Open from './Open/Open'
import TextMax from './TextMax/TextMax'
import PhotoAlbom from './PhotoAlbom/PhotoAlbom'
import Musk from './Musk/Musk'
import Join from './Join/Join'
import Price from './Price/Price'
import Header from '../Header/Header'
export default function Main() {
    return(
        <>
            <Header/>
            <main>
                <Open/>
                <TextMax/>
                <PhotoAlbom/>
                <Musk/>
                <Price/>
                <Join/>
            </main>
        </>
    )
}