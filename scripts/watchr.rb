#!/usr/bin/env watchr

# config file for watchr http://github.com/mynyml/watchr
# install: gem install watchr
# run: watch watchr.rb
# note: make sure that you have jstd server running (server.sh) and a browser captured

log_file = File.expand_path(File.dirname(__FILE__) + '/../logs/jstd.log')

`cd ..`
`touch #{log_file}`

puts "String watchr... log file: #{log_file}"

watch('(src/js/.*)') do |md|
  `echo "\n\n TypeScript Build #{md} @ \`date\`" > #{log_file}`
  output_file = md.to_s.sub(/src/, "app").sub(/\.ts/, '.js')
  cmd = "tsc -sourcemap --nolib --out #{output_file} #{md.to_s} "
  p cmd
  `#{cmd}`
  cmd = "copy #{md.to_s} #{md.to_s.sub(/src/, 'app')} ".gsub(/\//, '\\') + "/Y"
   p "#{cmd}"
  `#{cmd}`

end

watch('(src/partials/.*)') do |md|
  `echo "\n\n Jade Build #{md} @ \`date\`" > #{log_file}`
  #output_file = md.to_s.sub(/src/, "app").sub(/\.jade/, '')
  cmd = "jade -P --out app/partials #{md.to_s} "
  p "Jade - #{cmd}"
  `#{cmd}`
end


watch( '(app/js|test/unit)' )  do
  `echo "\n\ntest run started @ \`date\`" > #{log_file}`
  `scripts/test.sh > #{log_file} 2>&1`
end



