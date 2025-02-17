declare module 'particlesjs' {
  export interface ParticlesConfig {
    particles?: {
      number?: {
        value?: number;
        density?: {
          enable?: boolean;
          value_area?: number;
        };
      };
      color?: {
        value?: string;
      };
      shape?: {
        type?: string;
        stroke?: {
          width?: number;
          color?: string;
        };
      };
      opacity?: {
        value?: number;
        random?: boolean;
      };
      size?: {
        value?: number;
        random?: boolean;
      };
      line_linked?: {
        enable?: boolean;
        distance?: number;
        color?: string;
        opacity?: number;
        width?: number;
      };
      move?: {
        enable?: boolean;
        speed?: number;
        direction?: string;
        random?: boolean;
        straight?: boolean;
        out_mode?: string;
        bounce?: boolean;
      };
    };
    interactivity?: {
      detect_on?: string;
      events?: {
        onhover?: {
          enable?: boolean;
          mode?: string;
        };
        onclick?: {
          enable?: boolean;
          mode?: string;
        };
        resize?: boolean;
      };
      modes?: {
        grab?: {
          distance?: number;
          line_linked?: {
            opacity?: number;
          };
        };
        bubble?: {
          distance?: number;
          size?: number;
          duration?: number;
          opacity?: number;
          speed?: number;
        };
        repulse?: {
          distance?: number;
          duration?: number;
        };
        push?: {
          particles_nb?: number;
        };
        remove?: {
          particles_nb?: number;
        };
      };
    };
    retina_detect?: boolean;
  }

  export function init(elementId: string, config: ParticlesConfig): void;
}
