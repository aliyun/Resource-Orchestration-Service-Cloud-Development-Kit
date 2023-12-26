package com.aliyun.ros.cdk.ram;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::RAM::RamAccountAlias</code>, which is used to create an alias for an Alibaba Cloud account.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:17.396Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RamAccountAlias")
public class RamAccountAlias extends com.aliyun.ros.cdk.core.Resource {

    protected RamAccountAlias(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RamAccountAlias(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public RamAccountAlias(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.RamAccountAliasProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public RamAccountAlias(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.RamAccountAliasProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AccountAlias: The alias of the Alibaba Cloud account.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccountAlias() {
        return software.amazon.jsii.Kernel.get(this, "attrAccountAlias", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.RamAccountAlias}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.RamAccountAlias> {
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
        private final com.aliyun.ros.cdk.ram.RamAccountAliasProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ram.RamAccountAliasProps.Builder();
        }

        /**
         * Property accountAlias: The alias of the Alibaba Cloud account.
         * <p>
         * The alias must be 1 to 50 characters in length, and can contain lowercase letters,
         * digits, hyphens (-), periods (.) and underscores (_).
         * Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
         * hyphen (-) and cannot have two consecutive hyphens (-).
         * <p>
         * @return {@code this}
         * @param accountAlias Property accountAlias: The alias of the Alibaba Cloud account. This parameter is required.
         */
        public Builder accountAlias(final java.lang.String accountAlias) {
            this.props.accountAlias(accountAlias);
            return this;
        }
        /**
         * Property accountAlias: The alias of the Alibaba Cloud account.
         * <p>
         * The alias must be 1 to 50 characters in length, and can contain lowercase letters,
         * digits, hyphens (-), periods (.) and underscores (_).
         * Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
         * hyphen (-) and cannot have two consecutive hyphens (-).
         * <p>
         * @return {@code this}
         * @param accountAlias Property accountAlias: The alias of the Alibaba Cloud account. This parameter is required.
         */
        public Builder accountAlias(final com.aliyun.ros.cdk.core.IResolvable accountAlias) {
            this.props.accountAlias(accountAlias);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ram.RamAccountAlias}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.RamAccountAlias build() {
            return new com.aliyun.ros.cdk.ram.RamAccountAlias(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
