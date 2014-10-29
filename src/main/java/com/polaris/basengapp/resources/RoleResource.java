/**
 * 
 */
package com.polaris.basengapp.resources;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.polaris.basengapp.Constants;
import com.polaris.basengapp.dto.RoleDto;
import com.polaris.util.PolarisIdentity;
import com.polaris.util.SplunkLogger;

/**
 * @author bericks
 *
 */
@RestController
@RequestMapping("/role")
public class RoleResource {
	
	private static final SplunkLogger LOG = new SplunkLogger(RoleResource.class);

	/**
	 * Returns a {@link RoleDto} representing the logged in user.
	 * 
	 * @return a {@link RoleDto}
	 */
	@RequestMapping(method=RequestMethod.GET, produces=Constants.APPLICATION_TYPE_JSON)
	public RoleDto getRole() {
		
		LOG.methodStart(PolarisIdentity.get(), "getRole");
		
		RoleDto dto = createMockRole();
		
		LOG.methodEnd(PolarisIdentity.get(), "getRole");
		
		return dto;
	}
	
	private RoleDto createMockRole() {
		RoleDto role = new RoleDto();
		role.setFirstName("Edgar");
		role.setLastName("Hetteen");
		role.setUserId("edhettee");
		role.setUserRole("ADMIN");
		return role;
	}
	
}
