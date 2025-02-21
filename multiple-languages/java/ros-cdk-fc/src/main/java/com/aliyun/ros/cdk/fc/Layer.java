package com.aliyun.ros.cdk.fc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::FC::Layer</code>, which is used to release a layer version.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:22.625Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.Layer")
public class Layer extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.fc.ILayer {

    protected Layer(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Layer(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Layer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.LayerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Layer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.LayerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Arn: The name of the layer resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LayerName: The name of layer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLayerName() {
        return software.amazon.jsii.Kernel.get(this, "attrLayerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Version: The version of the layer resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.LayerProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc.LayerProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.fc.Layer}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc.Layer> {
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
        private final com.aliyun.ros.cdk.fc.LayerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc.LayerProps.Builder();
        }

        /**
         * Property code: The code of layer.
         * <p>
         * @return {@code this}
         * @param code Property code: The code of layer. This parameter is required.
         */
        public Builder code(final com.aliyun.ros.cdk.core.IResolvable code) {
            this.props.code(code);
            return this;
        }
        /**
         * Property code: The code of layer.
         * <p>
         * @return {@code this}
         * @param code Property code: The code of layer. This parameter is required.
         */
        public Builder code(final com.aliyun.ros.cdk.fc.RosLayer.CodeProperty code) {
            this.props.code(code);
            return this;
        }

        /**
         * Property compatibleRuntime: The runtime environment supported by the layer.
         * <p>
         * For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
         * <p>
         * @return {@code this}
         * @param compatibleRuntime Property compatibleRuntime: The runtime environment supported by the layer. This parameter is required.
         */
        public Builder compatibleRuntime(final com.aliyun.ros.cdk.core.IResolvable compatibleRuntime) {
            this.props.compatibleRuntime(compatibleRuntime);
            return this;
        }
        /**
         * Property compatibleRuntime: The runtime environment supported by the layer.
         * <p>
         * For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
         * <p>
         * @return {@code this}
         * @param compatibleRuntime Property compatibleRuntime: The runtime environment supported by the layer. This parameter is required.
         */
        public Builder compatibleRuntime(final java.util.List<? extends java.lang.Object> compatibleRuntime) {
            this.props.compatibleRuntime(compatibleRuntime);
            return this;
        }

        /**
         * Property layerName: The name of layer.
         * <p>
         * @return {@code this}
         * @param layerName Property layerName: The name of layer. This parameter is required.
         */
        public Builder layerName(final java.lang.String layerName) {
            this.props.layerName(layerName);
            return this;
        }
        /**
         * Property layerName: The name of layer.
         * <p>
         * @return {@code this}
         * @param layerName Property layerName: The name of layer. This parameter is required.
         */
        public Builder layerName(final com.aliyun.ros.cdk.core.IResolvable layerName) {
            this.props.layerName(layerName);
            return this;
        }

        /**
         * Property description: The description of the layer.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the layer. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the layer.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the layer. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc.Layer}.
         */
        @Override
        public com.aliyun.ros.cdk.fc.Layer build() {
            return new com.aliyun.ros.cdk.fc.Layer(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
