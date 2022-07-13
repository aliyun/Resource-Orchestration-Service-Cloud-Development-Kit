package com.aliyun.ros.cdk.cdn;

/**
 * A ROS resource type:  `ALIYUN::CDN::DomainConfig`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-13T09:24:19.422Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdn.$Module.class, fqn = "@alicloud/ros-cdk-cdn.DomainConfig")
public class DomainConfig extends com.aliyun.ros.cdk.core.Resource {

    protected DomainConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DomainConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CDN::DomainConfig`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public DomainConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cdn.DomainConfigProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CDN::DomainConfig`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DomainConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cdn.DomainConfigProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cdn.DomainConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cdn.DomainConfig> {
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
        private final com.aliyun.ros.cdk.cdn.DomainConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cdn.DomainConfigProps.Builder();
        }

        /**
         * Property domainNames: Your accelerated domain name, separated by commas in English.
         * <p>
         * @return {@code this}
         * @param domainNames Property domainNames: Your accelerated domain name, separated by commas in English. This parameter is required.
         */
        public Builder domainNames(final java.lang.String domainNames) {
            this.props.domainNames(domainNames);
            return this;
        }
        /**
         * Property domainNames: Your accelerated domain name, separated by commas in English.
         * <p>
         * @return {@code this}
         * @param domainNames Property domainNames: Your accelerated domain name, separated by commas in English. This parameter is required.
         */
        public Builder domainNames(final com.aliyun.ros.cdk.core.IResolvable domainNames) {
            this.props.domainNames(domainNames);
            return this;
        }

        /**
         * Property functions: function list, please refer to the CDN documentation for details.
         * <p>
         * @return {@code this}
         * @param functions Property functions: function list, please refer to the CDN documentation for details. This parameter is required.
         */
        public Builder functions(final java.lang.String functions) {
            this.props.functions(functions);
            return this;
        }
        /**
         * Property functions: function list, please refer to the CDN documentation for details.
         * <p>
         * @return {@code this}
         * @param functions Property functions: function list, please refer to the CDN documentation for details. This parameter is required.
         */
        public Builder functions(final com.aliyun.ros.cdk.core.IResolvable functions) {
            this.props.functions(functions);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cdn.DomainConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.cdn.DomainConfig build() {
            return new com.aliyun.ros.cdk.cdn.DomainConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
