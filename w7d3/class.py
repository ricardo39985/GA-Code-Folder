class Vehicle():
  def __init__(self, vin,make, model):
    self.vin = vin
    self.make = make
    self.model = model
    self.running=False

  def start(self):
      self.running= True

  def stop(self):
      self.running= False

  def __str__(self):
    return f'Vehicle ({self.vin}) is a {self.make} model {self.model} '
honda = Vehicle('XNDK12','Honda', 'ShitBox')
print(honda)
