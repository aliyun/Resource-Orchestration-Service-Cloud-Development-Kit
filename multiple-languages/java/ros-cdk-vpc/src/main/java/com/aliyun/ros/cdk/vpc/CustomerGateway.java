package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::CustomerGateway</code>, which is used to create a customer gateway.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:18.344Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.CustomerGateway")
public class CustomerGateway extends com.aliyun.ros.cdk.core.Resource {

    protected CustomerGateway(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CustomerGateway(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public CustomerGateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.CustomerGatewayProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public CustomerGateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.CustomerGatewayProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CustomerGatewayId: The ID of the user gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCustomerGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "attrCustomerGatewayId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.CustomerGateway}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.CustomerGateway> {
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
        private final com.aliyun.ros.cdk.vpc.CustomerGatewayProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.CustomerGatewayProps.Builder();
        }

        /**
         * Property ipAddress: The IP address of the user gateway.
         * <p>
         * @return {@code this}
         * @param ipAddress Property ipAddress: The IP address of the user gateway. This parameter is required.
         */
        public Builder ipAddress(final java.lang.String ipAddress) {
            this.props.ipAddress(ipAddress);
            return this;
        }
        /**
         * Property ipAddress: The IP address of the user gateway.
         * <p>
         * @return {@code this}
         * @param ipAddress Property ipAddress: The IP address of the user gateway. This parameter is required.
         */
        public Builder ipAddress(final com.aliyun.ros.cdk.core.IResolvable ipAddress) {
            this.props.ipAddress(ipAddress);
            return this;
        }

        /**
         * Property asn: The autonomous system number of the local data center gateway device.
         * <p>
         * @return {@code this}
         * @param asn Property asn: The autonomous system number of the local data center gateway device. This parameter is required.
         */
        public Builder asn(final java.lang.Number asn) {
            this.props.asn(asn);
            return this;
        }
        /**
         * Property asn: The autonomous system number of the local data center gateway device.
         * <p>
         * @return {@code this}
         * @param asn Property asn: The autonomous system number of the local data center gateway device. This parameter is required.
         */
        public Builder asn(final com.aliyun.ros.cdk.core.IResolvable asn) {
            this.props.asn(asn);
            return this;
        }

        /**
         * Property description: Description of the user gateway.
         * <p>
         * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the user gateway. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the user gateway.
         * <p>
         * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the user gateway. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property name: The name of the user gateway.
         * <p>
         * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the user gateway. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the user gateway.
         * <p>
         * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the user gateway. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.CustomerGateway}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.CustomerGateway build() {
            return new com.aliyun.ros.cdk.vpc.CustomerGateway(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
