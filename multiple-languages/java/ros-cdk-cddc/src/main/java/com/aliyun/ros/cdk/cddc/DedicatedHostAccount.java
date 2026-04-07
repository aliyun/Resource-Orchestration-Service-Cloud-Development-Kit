package com.aliyun.ros.cdk.cddc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CDDC::DedicatedHostAccount</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:22.199Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cddc.$Module.class, fqn = "@alicloud/ros-cdk-cddc.DedicatedHostAccount")
public class DedicatedHostAccount extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cddc.IDedicatedHostAccount {

    protected DedicatedHostAccount(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DedicatedHostAccount(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DedicatedHostAccount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.DedicatedHostAccountProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DedicatedHostAccount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.DedicatedHostAccountProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.DedicatedHostAccountProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cddc.DedicatedHostAccountProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cddc.DedicatedHostAccount}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cddc.DedicatedHostAccount> {
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
        private final com.aliyun.ros.cdk.cddc.DedicatedHostAccountProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cddc.DedicatedHostAccountProps.Builder();
        }

        /**
         * Property accountName: The name of the account.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: The name of the account. This parameter is required.
         */
        public Builder accountName(final java.lang.String accountName) {
            this.props.accountName(accountName);
            return this;
        }
        /**
         * Property accountName: The name of the account.
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: The name of the account. This parameter is required.
         */
        public Builder accountName(final com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.props.accountName(accountName);
            return this;
        }

        /**
         * Property accountPassword: The password of the account.
         * <p>
         * @return {@code this}
         * @param accountPassword Property accountPassword: The password of the account. This parameter is required.
         */
        public Builder accountPassword(final java.lang.String accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }
        /**
         * Property accountPassword: The password of the account.
         * <p>
         * @return {@code this}
         * @param accountPassword Property accountPassword: The password of the account. This parameter is required.
         */
        public Builder accountPassword(final com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }

        /**
         * Property dedicatedHostId: The ID of the dedicated host.
         * <p>
         * @return {@code this}
         * @param dedicatedHostId Property dedicatedHostId: The ID of the dedicated host. This parameter is required.
         */
        public Builder dedicatedHostId(final java.lang.String dedicatedHostId) {
            this.props.dedicatedHostId(dedicatedHostId);
            return this;
        }
        /**
         * Property dedicatedHostId: The ID of the dedicated host.
         * <p>
         * @return {@code this}
         * @param dedicatedHostId Property dedicatedHostId: The ID of the dedicated host. This parameter is required.
         */
        public Builder dedicatedHostId(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostId) {
            this.props.dedicatedHostId(dedicatedHostId);
            return this;
        }

        /**
         * Property accountType: The type of the account.
         * <p>
         * @return {@code this}
         * @param accountType Property accountType: The type of the account. This parameter is required.
         */
        public Builder accountType(final java.lang.String accountType) {
            this.props.accountType(accountType);
            return this;
        }
        /**
         * Property accountType: The type of the account.
         * <p>
         * @return {@code this}
         * @param accountType Property accountType: The type of the account. This parameter is required.
         */
        public Builder accountType(final com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.props.accountType(accountType);
            return this;
        }

        /**
         * Property bastionInstanceId: The ID of the bastion instance.
         * <p>
         * @return {@code this}
         * @param bastionInstanceId Property bastionInstanceId: The ID of the bastion instance. This parameter is required.
         */
        public Builder bastionInstanceId(final java.lang.String bastionInstanceId) {
            this.props.bastionInstanceId(bastionInstanceId);
            return this;
        }
        /**
         * Property bastionInstanceId: The ID of the bastion instance.
         * <p>
         * @return {@code this}
         * @param bastionInstanceId Property bastionInstanceId: The ID of the bastion instance. This parameter is required.
         */
        public Builder bastionInstanceId(final com.aliyun.ros.cdk.core.IResolvable bastionInstanceId) {
            this.props.bastionInstanceId(bastionInstanceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cddc.DedicatedHostAccount}.
         */
        @Override
        public com.aliyun.ros.cdk.cddc.DedicatedHostAccount build() {
            return new com.aliyun.ros.cdk.cddc.DedicatedHostAccount(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
