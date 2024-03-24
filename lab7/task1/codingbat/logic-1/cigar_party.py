def cigar_party(cigars, is_weekend):
  return (cigars >= 40 and cigars <= 60 and is_weekend == False) or (is_weekend == True and cigars >= 40)

