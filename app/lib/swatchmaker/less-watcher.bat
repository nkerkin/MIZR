watchr -e "watch('.*\.less'){|f| p 'start'; system('make bootswatch OUTPUT_PATH=../bootstrap/css'); p 'DONE!!' }"