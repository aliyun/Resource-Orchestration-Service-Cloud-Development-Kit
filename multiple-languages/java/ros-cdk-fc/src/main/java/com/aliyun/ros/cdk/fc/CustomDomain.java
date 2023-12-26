package com.aliyun.ros.cdk.fc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::FC::CustomDomain</code>, which is used to create a custom domain name.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:16.133Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.CustomDomain")
public class CustomDomain extends com.aliyun.ros.cdk.core.Resource {

    protected CustomDomain(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CustomDomain(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public CustomDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.CustomDomainProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public CustomDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.CustomDomainProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Domain: The domain with protocol.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DomainName: The domain name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc.CustomDomain}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc.CustomDomain> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.fc.CustomDomainProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc.CustomDomainProps.Builder();
        }

        /**
         * Property domainName: domain name.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: domain name. This parameter is required.
         */
        public Builder domainName(final java.lang.String domainName) {
            this.props.domainName(domainName);
            return this;
        }
        /**
         * Property domainName: domain name.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: domain name. This parameter is required.
         */
        public Builder domainName(final com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.props.domainName(domainName);
            return this;
        }

        /**
         * Property protocol: HTTP or HTTP,HTTPS.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: HTTP or HTTP,HTTPS. This parameter is required.
         */
        public Builder protocol(final java.lang.String protocol) {
            this.props.protocol(protocol);
            return this;
        }
        /**
         * Property protocol: HTTP or HTTP,HTTPS.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: HTTP or HTTP,HTTPS. This parameter is required.
         */
        public Builder protocol(final com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.props.protocol(protocol);
            return this;
        }

        /**
         * Property apiVersion: api version.
         * <p>
         * @return {@code this}
         * @param apiVersion Property apiVersion: api version. This parameter is required.
         */
        public Builder apiVersion(final java.lang.String apiVersion) {
            this.props.apiVersion(apiVersion);
            return this;
        }
        /**
         * Property apiVersion: api version.
         * <p>
         * @return {@code this}
         * @param apiVersion Property apiVersion: api version. This parameter is required.
         */
        public Builder apiVersion(final com.aliyun.ros.cdk.core.IResolvable apiVersion) {
            this.props.apiVersion(apiVersion);
            return this;
        }

        /**
         * Property certConfig: certificate info.
         * <p>
         * @return {@code this}
         * @param certConfig Property certConfig: certificate info. This parameter is required.
         */
        public Builder certConfig(final com.aliyun.ros.cdk.core.IResolvable certConfig) {
            this.props.certConfig(certConfig);
            return this;
        }
        /**
         * Property certConfig: certificate info.
         * <p>
         * @return {@code this}
         * @param certConfig Property certConfig: certificate info. This parameter is required.
         */
        public Builder certConfig(final com.aliyun.ros.cdk.fc.RosCustomDomain.CertConfigProperty certConfig) {
            this.props.certConfig(certConfig);
            return this;
        }

        /**
         * Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.
         * <p>
         * @return {@code this}
         * @param routeConfig Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name. This parameter is required.
         */
        public Builder routeConfig(final com.aliyun.ros.cdk.core.IResolvable routeConfig) {
            this.props.routeConfig(routeConfig);
            return this;
        }
        /**
         * Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.
         * <p>
         * @return {@code this}
         * @param routeConfig Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name. This parameter is required.
         */
        public Builder routeConfig(final com.aliyun.ros.cdk.fc.RosCustomDomain.RouteConfigProperty routeConfig) {
            this.props.routeConfig(routeConfig);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc.CustomDomain}.
         */
        @Override
        public com.aliyun.ros.cdk.fc.CustomDomain build() {
            return new com.aliyun.ros.cdk.fc.CustomDomain(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
