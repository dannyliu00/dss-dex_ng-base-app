/**
 * 
 */
package com.polaris.basengapp.dto;

import java.io.Serializable;

/**
 * @author bericks
 *
 */
public class RoleDto implements Serializable {

	private static final long serialVersionUID = -2790413857003738288L;

	private String userId;
	private String userRole;
	private String firstName;
	private String lastName;
	private String sessionId;

	/**
	 * @return the userId
	 */
	public String getUserId() {
		return userId;
	}

	/**
	 * @param userId the userId to set
	 */
	public void setUserId(String userId) {
		this.userId = userId;
	}

	/**
	 * @return the userRole
	 */
	public String getUserRole() {
		return userRole;
	}

	/**
	 * @param userRole the userRole to set
	 */
	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	/**
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * @param firstName the firstName to set
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	/**
	 * @return the lastName
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * @param lastName the lastName to set
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	/**
	 * 
	 * @return
	 */
	public String getFullName() {
		String fullName = "";
		fullName += this.firstName != null ? this.firstName : "";
		fullName += this.firstName != null && this.lastName != null ? " " : "";
		fullName += this.lastName != null ? this.lastName : "";
		return fullName;
	}

	/**
	 * @return the sessionId
	 */
	public String getSessionId() {
		return sessionId;
	}

	/**
	 * @param sessionId the sessionId to set
	 */
	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}
	
}
