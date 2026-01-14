/* pass interpolated variables to from the vertex */
varying vec2 v_uv;

// get the texture from the program
uniform sampler2D tex;
uniform float time;
uniform sampler2D height_map;

const float SPIN_SPEED1 = 0.1;
const float SPIN_SPEED2 = 0.05;

void main()
{
    vec2 uv1 = v_uv * 0.5;
    vec2 uv2 = v_uv * 0.2;
    uv1 += (time / 1000.) * SPIN_SPEED1;
    uv2.x += (time / 950.) * SPIN_SPEED2;

    // add texture
    vec3 baseColor = ( texture2D(tex, fract(v_uv)).rgb * texture2D(tex, fract(uv1)).rgb * texture2D(tex, fract(uv2)).rgb) / 1.;
    
    gl_FragColor = vec4(baseColor, 1.);
}