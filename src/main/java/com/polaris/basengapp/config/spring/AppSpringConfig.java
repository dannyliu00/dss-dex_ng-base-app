package com.polaris.basengapp.config.spring;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.polaris.pwf.config.spring.MvcConfig;
import com.polaris.pwf.config.spring.PwfSpringConfig;
import com.polaris.pwf.config.spring.datasource.InternationalDataSource;
import com.polaris.pwf.config.spring.datasource.PolarisDealersCommonDataSource;
import com.polaris.pwf.config.spring.datasource.PolarisDealersDataSource;
import com.polaris.pwf.config.spring.datasource.PolarisDealersExtensionDataSource;
import com.polaris.pwf.util.JndiUtil;

@Configuration
@ComponentScan(basePackages = { "com.polaris.basengapp"} )
@EnableTransactionManagement(proxyTargetClass = true)
@Import({PwfSpringConfig.class, PolarisDealersExtensionDataSource.class, PolarisDealersDataSource.class, 
	PolarisDealersCommonDataSource.class, InternationalDataSource.class, MvcConfig.class})
public class AppSpringConfig {

//	@Bean(name = "polarisDealersExtensionDataSourceAppPackagesToScan")
//	public String polarisDealersExtensionDataSourceAppPackagesToScan() {
//		return "com.polaris.basengapp.repository.entity";
//	}
	
//	@Bean(name = "polarisDealersDataSourceAppPackagesToScan")
//	public String polarisDealersDataSourceAppPackagesToScan() {
//		return "com.polaris.basengapp.repository.entity";
//	}

	@Bean(name = InternationalDataSource.DATASOURCE_BEAN_NAME)
	public DataSource internationalDataSource() {
		return JndiUtil.lookupDataSource("sql/PolarisDealersNPO");
	}

	@Bean(name = PolarisDealersExtensionDataSource.DATASOURCE_BEAN_NAME)
	public DataSource polarisDealersExtensionDataSource() {
		return JndiUtil.lookupDataSource("sql/PolarisDealersExtensionNPO");
	}

	@Bean(name = PolarisDealersCommonDataSource.DATASOURCE_BEAN_NAME)
	public DataSource polarisDealersCommonDataSource() {
		return JndiUtil.lookupDataSource("sql/PolarisDealersCommonNPO");
	}

	@Bean(name = PolarisDealersDataSource.DATASOURCE_BEAN_NAME)
	public DataSource polarisDealersDataSource() {
		return JndiUtil.lookupDataSource("sql/PolarisDealersNPO");
	}
	
}
