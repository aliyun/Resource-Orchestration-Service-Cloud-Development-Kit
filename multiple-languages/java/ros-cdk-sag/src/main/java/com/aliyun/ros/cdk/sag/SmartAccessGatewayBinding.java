package com.aliyun.ros.cdk.sag;

/**
 * A ROS resource type:  <code>ALIYUN::SAG::SmartAccessGatewayBinding</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:02.316Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.SmartAccessGatewayBinding")
public class SmartAccessGatewayBinding extends com.aliyun.ros.cdk.core.Resource {

    protected SmartAccessGatewayBinding(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SmartAccessGatewayBinding(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::SAG::SmartAccessGatewayBinding</code>.
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
    public SmartAccessGatewayBinding(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.SmartAccessGatewayBindingProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::SAG::SmartAccessGatewayBinding</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public SmartAccessGatewayBinding(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.SmartAccessGatewayBindingProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute SmartAGId: The ID of the Smart Access Gateway instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSmartAgId() {
        return software.amazon.jsii.Kernel.get(this, "attrSmartAgId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sag.SmartAccessGatewayBinding}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sag.SmartAccessGatewayBinding> {
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
        private final com.aliyun.ros.cdk.sag.SmartAccessGatewayBindingProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sag.SmartAccessGatewayBindingProps.Builder();
        }

        /**
         * Property ccnId: The ID of the CCN instance to bind.
         * <p>
         * @return {@code this}
         * @param ccnId Property ccnId: The ID of the CCN instance to bind. This parameter is required.
         */
        public Builder ccnId(final java.lang.String ccnId) {
            this.props.ccnId(ccnId);
            return this;
        }
        /**
         * Property ccnId: The ID of the CCN instance to bind.
         * <p>
         * @return {@code this}
         * @param ccnId Property ccnId: The ID of the CCN instance to bind. This parameter is required.
         */
        public Builder ccnId(final com.aliyun.ros.cdk.core.IResolvable ccnId) {
            this.props.ccnId(ccnId);
            return this;
        }

        /**
         * Property smartAgId: The ID of the Smart Access Gateway instance.
         * <p>
         * @return {@code this}
         * @param smartAgId Property smartAgId: The ID of the Smart Access Gateway instance. This parameter is required.
         */
        public Builder smartAgId(final java.lang.String smartAgId) {
            this.props.smartAgId(smartAgId);
            return this;
        }
        /**
         * Property smartAgId: The ID of the Smart Access Gateway instance.
         * <p>
         * @return {@code this}
         * @param smartAgId Property smartAgId: The ID of the Smart Access Gateway instance. This parameter is required.
         */
        public Builder smartAgId(final com.aliyun.ros.cdk.core.IResolvable smartAgId) {
            this.props.smartAgId(smartAgId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sag.SmartAccessGatewayBinding}.
         */
        @Override
        public com.aliyun.ros.cdk.sag.SmartAccessGatewayBinding build() {
            return new com.aliyun.ros.cdk.sag.SmartAccessGatewayBinding(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
