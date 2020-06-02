const args = process.argv.slice(2);

if (args.length === 0)
  return;

for (let i = 0 ; i < args.length ; i ++){
  let arg = args[i];
  if (arg < 0 || isNaN(arg))
    continue;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, arg * 1000);
}

