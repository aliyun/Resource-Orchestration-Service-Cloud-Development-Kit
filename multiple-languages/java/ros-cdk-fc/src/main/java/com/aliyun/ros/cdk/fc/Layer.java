package com.aliyun.ros.cdk.fc;

/**
 * A ROS resource type:  `ALIYUN::FC::Layer`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:41.695Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.Layer")
public class Layer extends com.aliyun.ros.cdk.core.Resource {

    protected Layer(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Layer(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::FC::Layer`.
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
    public Layer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.LayerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::FC::Layer`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LayerName: The name of layer.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLayerName() {
        return software.amazon.jsii.Kernel.get(this, "attrLayerName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Version: The version of the layer resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.fc.Layer}.
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
