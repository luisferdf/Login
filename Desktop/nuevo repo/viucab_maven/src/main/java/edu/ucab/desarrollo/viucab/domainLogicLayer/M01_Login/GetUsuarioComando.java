package edu.ucab.desarrollo.viucab.domainLogicLayer.M01_Login;

import edu.ucab.desarrollo.viucab.common.entities.Entity;
import edu.ucab.desarrollo.viucab.common.exceptions.BDConnectException1;
import edu.ucab.desarrollo.viucab.common.exceptions.BdConnectException;
import edu.ucab.desarrollo.viucab.common.exceptions.PLConnectException1;
import edu.ucab.desarrollo.viucab.common.exceptions.PlConnectException;
import edu.ucab.desarrollo.viucab.dataAccessLayer.DaoFactory;
import edu.ucab.desarrollo.viucab.dataAccessLayer.M01_Login.GetUsuarioDao;
import edu.ucab.desarrollo.viucab.domainLogicLayer.Command;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;

public class GetUsuarioComando extends Command {


    final static org.slf4j.Logger logger = LoggerFactory.getLogger(GetUsuarioComando.class);
    private static Entity est;
    private String username1;
    private String claveusu1;
    private String correousu1;
    private String resp;

    public GetUsuarioComando(String resp) {
        this.resp = resp;
    }

    public GetUsuarioComando(String username, String claveusu,String correousu) {
        this.username1 = username;
        this.claveusu1 = claveusu;
        this.correousu1 = correousu;
    }

    public GetUsuarioComando() {
        resp = ObtenerRespuesta();
    }

    /**
     * Metoto que Devuelve respuesta
     *
     */
    public String ObtenerRespuesta(){return resp; };


    @Override
    public void execute() throws BDConnectException1, PLConnectException1 {

        GetUsuarioDao dao = DaoFactory.instanciateDaoUsuario();
        resp= dao.addUsuario(username1,claveusu1,correousu1);


    }


    @Override
    public Entity Return() {
        return est;
    }
}
   /* private static Entity est;
    private Boolean resultado;



    public GetUsuarioComando(Entity est)
    {
        this.est = est;
    }


    public GetUsuarioComando(Boolean result) {
        this.resultado = result;
    }

    public Boolean getResultado()
    {
        return resultado;
    }


    @Override
    public void execute() throws BdConnectException, PlConnectException {


        try {
            GetUsuarioDao dao =  DaoFactory.instanciateDaoUsuario();
            resultado = dao.addUsuario(est);

        }
        catch (Exception e){
            est = new Entity();
            resultado = false; //si no devuelve nada, devuelve falso

        }


    }


    @Override
    public Entity Return() {
        return est;
    }


}*/