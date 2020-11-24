import React from 'react'
import { Row, Col } from 'react-flexbox-grid';

const TextBlock = () => {
  return (
    <div className="text-block">
      <Row>
        <Col lgOffset={2} lg={8}>
          <span className="text-block__intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum velit eu nunc luctus, at placerat neque vehicula.
            Morbi rhoncus sed sem ut ornare. Etiam lacinia est scelerisque nibh semper posuere. Morbi at porta lectus. Quisque at faucibus velit,
            eget eleifend tortor. Aliquam orci ligula, ultricies ut turpis ac, vestibulum scelerisque massa. Donec eu ipsum sed ipsum cursus aliquet a vitae odio.
            Suspendisse a viverra arcu.
          </span>
        </Col>
      </Row>
      <Row>
        <Col lgOffset={2} lg={8}>
          <div className="text-block__paragraph">
            <p>
              Donec consequat, neque vitae pharetra molestie, lacus nisi ornare purus, in ornare leo nunc et elit. Nunc volutpat, elit id dapibus molestie, elit orci rutrum lectus,
              pharetra condimentum nisi sem a sapien. Sed et diam vel orci mollis pretium. Nulla luctus mi ac libero tristique, eget consectetur risus congue. Sed lacinia arcu nec
              ultrices molestie. Ut id rutrum sem. Proin sed leo condimentum, suscipit nulla non, semper leo.
        
              Proin arcu velit, volutpat at iaculis at, bibendum a felis. Proin nec
              enim eget erat tincidunt aliquam. Sed dictum, leo eu gravida egestas, arcu tellus vestibulum dui, ut fermentum ligula urna sit amet felis. Phasellus pulvinar molestie mi.
              Proin sapien lectus, facilisis ut elit vel.

              Quisque vestibulum lorem eros, sed aliquet justo condimentum eu. Quisque porttitor quis nunc ac gravida.
              Curabitur in ultricies turpis. Pellentesque lobortis sagittis ultricies. Nulla malesuada, mi sit amet vestibulum iaculis, sapien massa fermentum diam, in porta lacus odio
              vel ligula. Vivamus maximus dui ante, vel consequat nisl viverra vitae. Donec condimentum tincidunt ullamcorper. Vestibulum interdum sagittis vehicula. Morbi vel dui varius
              magna molestie egestas scelerisque sit amet nunc.
            </p>
          </div>
        </Col>
      </Row>
    </div >
  )
}

export default TextBlock;