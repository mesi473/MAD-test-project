import Image from 'next/image'
import Image1 from '../public/images/image (1).jpg';

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <div>
            <Image src={Image1} alt="logo" class="w-1"/>
            <div>
                Logo
            </div>
            <div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Porjects</li>
                <li>Publication</li>
                <li>Partners</li>
                <li>Contact Us</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}