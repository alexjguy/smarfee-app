export class Feeder {
  constructor(
    public feederId: string,
    public feedTime1: string,
    public feedTime1Enabled: boolean,
    public feedTime2: string,
    public feedTime2Enabled: boolean,
    public feedTime3: string,
    public feedTime3Enabled: boolean,
    public feedTime4: string,
    public feedTime4Enabled: boolean,
    public feedTime5: string,
    public feedTime5Enabled: boolean,
    public password: string,
    public ntpEnabled: boolean
  ){}
}
