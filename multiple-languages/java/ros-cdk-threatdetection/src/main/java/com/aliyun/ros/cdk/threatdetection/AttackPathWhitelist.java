package com.aliyun.ros.cdk.threatdetection;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ThreatDetection::AttackPathWhitelist</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.586Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.AttackPathWhitelist")
public class AttackPathWhitelist extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.threatdetection.IAttackPathWhitelist {

    protected AttackPathWhitelist(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AttackPathWhitelist(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AttackPathWhitelist(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AttackPathWhitelistProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AttackPathWhitelist(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AttackPathWhitelistProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AttackPathAssetList: List of attack path assets.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttackPathAssetList() {
        return software.amazon.jsii.Kernel.get(this, "attrAttackPathAssetList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AttackPathWhitelistId: The attack path whitelist ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttackPathWhitelistId() {
        return software.amazon.jsii.Kernel.get(this, "attrAttackPathWhitelistId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PathName: The whitelist path name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPathName() {
        return software.amazon.jsii.Kernel.get(this, "attrPathName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PathType: The whitelist path type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPathType() {
        return software.amazon.jsii.Kernel.get(this, "attrPathType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Remark: Remark information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemark() {
        return software.amazon.jsii.Kernel.get(this, "attrRemark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WhitelistName: The whitelist name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelistName() {
        return software.amazon.jsii.Kernel.get(this, "attrWhitelistName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WhitelistType: The whitelist type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelistType() {
        return software.amazon.jsii.Kernel.get(this, "attrWhitelistType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AttackPathWhitelistProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.AttackPathWhitelistProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.AttackPathWhitelist}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.AttackPathWhitelist> {
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
        private final com.aliyun.ros.cdk.threatdetection.AttackPathWhitelistProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.AttackPathWhitelistProps.Builder();
        }

        /**
         * Property pathName: The whitelist path name.
         * <p>
         * @return {@code this}
         * @param pathName Property pathName: The whitelist path name. This parameter is required.
         */
        public Builder pathName(final java.lang.String pathName) {
            this.props.pathName(pathName);
            return this;
        }
        /**
         * Property pathName: The whitelist path name.
         * <p>
         * @return {@code this}
         * @param pathName Property pathName: The whitelist path name. This parameter is required.
         */
        public Builder pathName(final com.aliyun.ros.cdk.core.IResolvable pathName) {
            this.props.pathName(pathName);
            return this;
        }

        /**
         * Property pathType: The whitelist path type.
         * <p>
         * @return {@code this}
         * @param pathType Property pathType: The whitelist path type. This parameter is required.
         */
        public Builder pathType(final java.lang.String pathType) {
            this.props.pathType(pathType);
            return this;
        }
        /**
         * Property pathType: The whitelist path type.
         * <p>
         * @return {@code this}
         * @param pathType Property pathType: The whitelist path type. This parameter is required.
         */
        public Builder pathType(final com.aliyun.ros.cdk.core.IResolvable pathType) {
            this.props.pathType(pathType);
            return this;
        }

        /**
         * Property whitelistName: The whitelist name.
         * <p>
         * @return {@code this}
         * @param whitelistName Property whitelistName: The whitelist name. This parameter is required.
         */
        public Builder whitelistName(final java.lang.String whitelistName) {
            this.props.whitelistName(whitelistName);
            return this;
        }
        /**
         * Property whitelistName: The whitelist name.
         * <p>
         * @return {@code this}
         * @param whitelistName Property whitelistName: The whitelist name. This parameter is required.
         */
        public Builder whitelistName(final com.aliyun.ros.cdk.core.IResolvable whitelistName) {
            this.props.whitelistName(whitelistName);
            return this;
        }

        /**
         * Property whitelistType: The whitelist type.
         * <p>
         * Values:
         * <p>
         * <ul>
         * <li>ALL_ASSET: All assets.</li>
         * <li>PART_ASSET: Partial assets.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param whitelistType Property whitelistType: The whitelist type. This parameter is required.
         */
        public Builder whitelistType(final java.lang.String whitelistType) {
            this.props.whitelistType(whitelistType);
            return this;
        }
        /**
         * Property whitelistType: The whitelist type.
         * <p>
         * Values:
         * <p>
         * <ul>
         * <li>ALL_ASSET: All assets.</li>
         * <li>PART_ASSET: Partial assets.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param whitelistType Property whitelistType: The whitelist type. This parameter is required.
         */
        public Builder whitelistType(final com.aliyun.ros.cdk.core.IResolvable whitelistType) {
            this.props.whitelistType(whitelistType);
            return this;
        }

        /**
         * Property attackPathAssetList: List of attack path assets.
         * <p>
         * @return {@code this}
         * @param attackPathAssetList Property attackPathAssetList: List of attack path assets. This parameter is required.
         */
        public Builder attackPathAssetList(final com.aliyun.ros.cdk.core.IResolvable attackPathAssetList) {
            this.props.attackPathAssetList(attackPathAssetList);
            return this;
        }
        /**
         * Property attackPathAssetList: List of attack path assets.
         * <p>
         * @return {@code this}
         * @param attackPathAssetList Property attackPathAssetList: List of attack path assets. This parameter is required.
         */
        public Builder attackPathAssetList(final java.util.List<? extends java.lang.Object> attackPathAssetList) {
            this.props.attackPathAssetList(attackPathAssetList);
            return this;
        }

        /**
         * Property remark: Remark information.
         * <p>
         * @return {@code this}
         * @param remark Property remark: Remark information. This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * Property remark: Remark information.
         * <p>
         * @return {@code this}
         * @param remark Property remark: Remark information. This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.AttackPathWhitelist}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.AttackPathWhitelist build() {
            return new com.aliyun.ros.cdk.threatdetection.AttackPathWhitelist(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
