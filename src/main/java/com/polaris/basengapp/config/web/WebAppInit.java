package com.polaris.basengapp.config.web;

import javax.servlet.ServletContext;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.filter.DelegatingFilterProxy;
import org.springframework.web.servlet.DispatcherServlet;

import com.polaris.basengapp.config.spring.AppSpringConfig;

public class WebAppInit implements WebApplicationInitializer {
	
	@Override
	public void onStartup(ServletContext servletContext) {

		// Create the 'root' Spring application context.
		AnnotationConfigWebApplicationContext rootContext = new AnnotationConfigWebApplicationContext();
		rootContext.register(AppSpringConfig.class);

		// Manage the lifecycle of the root application context.
		servletContext.addListener(new ContextLoaderListener(rootContext));

		// SessionFilter configuration
		String[] protectedUrls = new String[] { "/rest/*" };
		servletContext.addFilter("sessionFilter", new DelegatingFilterProxy("sessionFilter")).addMappingForUrlPatterns(null, false, protectedUrls);

	    ServletRegistration.Dynamic registration = servletContext.addServlet("dispatcher", new DispatcherServlet(rootContext));
	    registration.setLoadOnStartup(1);
	    registration.addMapping("/*");
		
		rootContext.registerShutdownHook();
	}
}
