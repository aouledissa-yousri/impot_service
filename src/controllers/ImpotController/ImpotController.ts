import { AppDataSource } from '../../dataSource';
import { Impot } from '../../models/Impot';

export abstract class ImpotController {



    public static async getImpot(cin: number){
        let impot = await AppDataSource.manager.findOne(Impot, {where: {cin: cin}})
        
        if(impot == null) impot = new Impot()

        return impot
    }
}