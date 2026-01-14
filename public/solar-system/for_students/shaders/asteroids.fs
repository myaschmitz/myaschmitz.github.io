/* pass interpolated variables to from the vertex */
varying vec2 v_uv;

// get the texture from the program
uniform sampler2D tex;
uniform sampler2D height_map;

void main()
{    
    gl_FragColor = texture2D(tex, v_uv);
}