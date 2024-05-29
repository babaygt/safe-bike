'use client'
import { useState } from 'react'
import '@radix-ui/themes/styles.css';
import { Theme, Box, Card, Inset, Text, Strong, Heading, size, Button} from '@radix-ui/themes';
import Image1 from '@/components/img/Image1.png';
import Image2 from '@/components/img/Image2.png';
import Image3 from '@/components/img/Image3.png';


export default function Home() {

    const images = [Image1, Image2, Image3];

    const cardTexts = [
      "See whats going on around you.",
      "Choose the best path for yourself.",
      "Get Notified of Potential Hazards."
    ];


    return ( 
        <Theme style={{ 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh',
            gap: '96px',
            marginTop: '-20px',
            background: 'radial-gradient(circle at 0 0, rgba(0,255,153), rgba(255,0,0,0) 70.71%), radial-gradient(circle at 100% 0, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), radial-gradient(circle at 100% 100%, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%), radial-gradient(circle at 0 100%, rgba(255,255,0,.8), rgba(255,255,0,0) 70.71%)',
            backgroundSize: '100% 100%',
        }}> 
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '20px',
        }}>
             <Heading size="9" style={{ color: 'white' }}>The Future of Cycle Safety</Heading>
            <Heading size="7" style={{ color: '#949494' }}>In the Palm of your Hand</Heading>
            <a href="about" style={{marginTop: '10px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Button style={{ backgroundColor: '#00FF99', color: 'white' }}>Learn More</Button>
            </a>
        </div>
        <div id="about" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'flex-start', 
            flexDirection: 'row',
            gap: '20px',
        }}>
            {[...Array(3)].map((_, i) => (
                <Box key={i} maxWidth="320px">
                    <Card size="6">
                        <Inset clip="padding-box" side="top" pb="current">
                            <img
                                src={images[i]}
                                alt="Bold typography"
                                style={{
                                    display: 'block',
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: 200,
                                    backgroundColor: 'var(--gray-5)',
                                }}
                            />
                        </Inset>
                        <Text as="p" size="1">
                        <Strong>{cardTexts[i]}</Strong>
                        </Text>
                    </Card>
                </Box>
            ))}
        </div>
        </Theme>
    )
}