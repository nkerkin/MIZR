watchr -e "watch('swatchmaker\\swatchmaker.*\.less'){|f| p 'start'; system('make -C swatchmaker bootswatch OUTPUT_PATH=../bootstrap/css'); p 'DONE!!'}"