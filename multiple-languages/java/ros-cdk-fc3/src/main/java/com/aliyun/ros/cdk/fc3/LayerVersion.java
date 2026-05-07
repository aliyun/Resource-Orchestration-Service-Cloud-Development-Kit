package com.aliyun.ros.cdk.fc3;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::FC3::LayerVersion</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.592Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.LayerVersion")
public class LayerVersion extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.fc3.ILayerVersion {

    protected LayerVersion(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LayerVersion(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public LayerVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.LayerVersionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public LayerVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.LayerVersionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Acl: The access permission of the layer, 1: public, 0: private, default is private.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAcl() {
        return software.amazon.jsii.Kernel.get(this, "attrAcl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CodeSize: The code package size of the layer, in bytes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeSize() {
        return software.amazon.jsii.Kernel.get(this, "attrCodeSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CompatibleRuntime: List of runtime environments supported by the layer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCompatibleRuntime() {
        return software.amazon.jsii.Kernel.get(this, "attrCompatibleRuntime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: Description of the version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LayerName: Name of the layer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLayerName() {
        return software.amazon.jsii.Kernel.get(this, "attrLayerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LayerVersionArn: Layer version ARN.
     * <p>
     * The format is acs:fc:{region }:{ accountID}:layers/{layerName}/versions/{layerVersion}.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLayerVersionArn() {
        return software.amazon.jsii.Kernel.get(this, "attrLayerVersionArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute License: Layer License Agreement.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLicense() {
        return software.amazon.jsii.Kernel.get(this, "attrLicense", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Version: The version of the layer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.LayerVersionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc3.LayerVersionProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.fc3.LayerVersion}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc3.LayerVersion> {
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
        private final com.aliyun.ros.cdk.fc3.LayerVersionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc3.LayerVersionProps.Builder();
        }

        /**
         * Property layerName: Name of the layer.
         * <p>
         * @return {@code this}
         * @param layerName Property layerName: Name of the layer. This parameter is required.
         */
        public Builder layerName(final java.lang.String layerName) {
            this.props.layerName(layerName);
            return this;
        }
        /**
         * Property layerName: Name of the layer.
         * <p>
         * @return {@code this}
         * @param layerName Property layerName: Name of the layer. This parameter is required.
         */
        public Builder layerName(final com.aliyun.ros.cdk.core.IResolvable layerName) {
            this.props.layerName(layerName);
            return this;
        }

        /**
         * Property acl: The access permission of the layer, 1: public, 0: private, default is private.
         * <p>
         * @return {@code this}
         * @param acl Property acl: The access permission of the layer, 1: public, 0: private, default is private. This parameter is required.
         */
        public Builder acl(final java.lang.String acl) {
            this.props.acl(acl);
            return this;
        }
        /**
         * Property acl: The access permission of the layer, 1: public, 0: private, default is private.
         * <p>
         * @return {@code this}
         * @param acl Property acl: The access permission of the layer, 1: public, 0: private, default is private. This parameter is required.
         */
        public Builder acl(final com.aliyun.ros.cdk.core.IResolvable acl) {
            this.props.acl(acl);
            return this;
        }

        /**
         * Property code: Layer code configuration.
         * <p>
         * @return {@code this}
         * @param code Property code: Layer code configuration. This parameter is required.
         */
        public Builder code(final com.aliyun.ros.cdk.core.IResolvable code) {
            this.props.code(code);
            return this;
        }
        /**
         * Property code: Layer code configuration.
         * <p>
         * @return {@code this}
         * @param code Property code: Layer code configuration. This parameter is required.
         */
        public Builder code(final com.aliyun.ros.cdk.fc3.RosLayerVersion.CodeProperty code) {
            this.props.code(code);
            return this;
        }

        /**
         * Property compatibleRuntime: List of runtime environments supported by the layer.
         * <p>
         * @return {@code this}
         * @param compatibleRuntime Property compatibleRuntime: List of runtime environments supported by the layer. This parameter is required.
         */
        public Builder compatibleRuntime(final com.aliyun.ros.cdk.core.IResolvable compatibleRuntime) {
            this.props.compatibleRuntime(compatibleRuntime);
            return this;
        }
        /**
         * Property compatibleRuntime: List of runtime environments supported by the layer.
         * <p>
         * @return {@code this}
         * @param compatibleRuntime Property compatibleRuntime: List of runtime environments supported by the layer. This parameter is required.
         */
        public Builder compatibleRuntime(final java.util.List<? extends java.lang.Object> compatibleRuntime) {
            this.props.compatibleRuntime(compatibleRuntime);
            return this;
        }

        /**
         * Property description: Description of the version.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the version. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the version.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the version. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property license: Layer License Agreement.
         * <p>
         * @return {@code this}
         * @param license Property license: Layer License Agreement. This parameter is required.
         */
        public Builder license(final java.lang.String license) {
            this.props.license(license);
            return this;
        }
        /**
         * Property license: Layer License Agreement.
         * <p>
         * @return {@code this}
         * @param license Property license: Layer License Agreement. This parameter is required.
         */
        public Builder license(final com.aliyun.ros.cdk.core.IResolvable license) {
            this.props.license(license);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc3.LayerVersion}.
         */
        @Override
        public com.aliyun.ros.cdk.fc3.LayerVersion build() {
            return new com.aliyun.ros.cdk.fc3.LayerVersion(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
