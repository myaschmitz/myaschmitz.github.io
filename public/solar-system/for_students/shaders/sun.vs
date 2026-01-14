/*
 * Simple Shader
 * Simplest vertex shader, except that we add the UV coordinate
 * All we do is pass this to the fragment shader
 *
 * You should not need to change this fragment shader,
 * but you can if you want to.
 */

/* pass interpolated variables to the fragment */
varying vec2 v_uv;

uniform float time;
uniform float height;
uniform sampler2D height_map;

const float SPEED1 = 0.1;
const float SPEED2 = -0.12;

// 2D Random
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

// 2D Noise based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

/* the vertex shader just passes stuff to the fragment shader after doing the
 * appropriate transformations of the vertex information
 */
void main() {
    // pass the texture coordinate to the fragment
    v_uv = uv;

    vec2 uv1 = v_uv;
    vec2 uv2 = v_uv;

    uv1 += (time / 1000.) * SPEED1;
    uv2 += (time / 1200.) * SPEED2;

    float noise1 = noise(uv1 * 20.);
    float noise2 = noise(uv2 * 20.);

    // move the position along the normal and transform it
    vec3 newPosition = position + normal * (noise1 + noise2) * 0.2;

    // the main output of the shader (the vertex position)
    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
}