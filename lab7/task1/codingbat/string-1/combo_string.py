def combo_string(a, b):
  if len(b) > len(a):
    c = a
    a = b
    b = c
    
  return b+a+b