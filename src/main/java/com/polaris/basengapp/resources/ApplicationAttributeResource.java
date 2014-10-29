package com.polaris.basengapp.resources;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.polaris.basengapp.Constants;
import com.polaris.util.PolarisIdentity;
import com.polaris.util.SplunkLogger;

/**
 * Provides application settings to the UI
 * 
 * @author bericks
 *
 */
@RestController
@RequestMapping("/attributes")
public class ApplicationAttributeResource {

	private static final SplunkLogger LOG = new SplunkLogger(ApplicationAttributeResource.class);
	
	@RequestMapping(method=RequestMethod.GET, produces=Constants.APPLICATION_TYPE_JSON)
	public Map<String, String> getAttributes() {
		
		LOG.methodStart(PolarisIdentity.get(), "getAttributes");
		
		try {
			LOG.debug(PolarisIdentity.get(), "getAttributes", "Building attributes from AttributeHelper");
			Map<String, String> attributes = new HashMap<String, String>();
			
			attributes.put(Constants.ATTR_ASKPOLARISURL, "http://consumerservicedev.polarisind.com/AskPolaris/Default.aspx");
			attributes.put(Constants.ATTR_ECHATURL, "https://pii.webex.com/pii/supportcenter/webacd.wbx?WQID=3fffb4151125ce7a2f6d48b7d0b8908d");
			attributes.put(Constants.ATTR_DSMHOME, "http://dealerdev.polarisind.com/dsm/dsmmainmenu.asp");
			attributes.put(Constants.ATTR_DEALERHOME, "http://dealerdev.polarisind.com/mainmenu.asp");
			attributes.put(Constants.ATTR_INTRANETHOME, "http://internal.polarisind.com/Pages/Default.aspx");
			attributes.put(Constants.ATTR_DEALERCASES, "http://consumerservicedev.polarisind.com/AskPolaris/Pages/Incidents/DealerCaseList.aspx?");
			attributes.put(Constants.ATTR_CHANGEDEALER, "http://inetdev.polarisind.com/ExtranetTransfer.asp");
			attributes.put(Constants.ATTR_ADMINHOMEURL, "http://dealerdev.polarisind.com/admin/mainmenu.asp");
			attributes.put(Constants.ATTR_DEXROOT, "http://dealerdev.polarisind.com/");
			attributes.put(Constants.ATTR_ADMINHOME, "");
			
			LOG.methodEnd(PolarisIdentity.get(), "getAttributes");
			
			return attributes;
			
		} catch (Exception e) {
			// Log whatever this is and re throw
			LOG.error(PolarisIdentity.get(), "getAttributes", e);
			//throw e;
			return null;
		}
	}
}
