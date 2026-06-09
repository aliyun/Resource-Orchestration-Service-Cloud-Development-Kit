package com.aliyun.ros.cdk.cms2;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CMS2::AddonRelease</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:59:01.314Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.AddonRelease")
public class AddonRelease extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cms2.IAddonRelease {

    protected AddonRelease(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AddonRelease(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AddonRelease(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms2.AddonReleaseProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AddonRelease(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms2.AddonReleaseProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ReleaseName: The name of the add-on release.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReleaseName() {
        return software.amazon.jsii.Kernel.get(this, "attrReleaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms2.AddonReleaseProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms2.AddonReleaseProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cms2.AddonRelease}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms2.AddonRelease> {
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
        private final com.aliyun.ros.cdk.cms2.AddonReleaseProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms2.AddonReleaseProps.Builder();
        }

        /**
         * Property addonName: The name of the add-on.
         * <p>
         * @return {@code this}
         * @param addonName Property addonName: The name of the add-on. This parameter is required.
         */
        public Builder addonName(final java.lang.String addonName) {
            this.props.addonName(addonName);
            return this;
        }
        /**
         * Property addonName: The name of the add-on.
         * <p>
         * @return {@code this}
         * @param addonName Property addonName: The name of the add-on. This parameter is required.
         */
        public Builder addonName(final com.aliyun.ros.cdk.core.IResolvable addonName) {
            this.props.addonName(addonName);
            return this;
        }

        /**
         * Property addonVersion: The version of the add-on.
         * <p>
         * @return {@code this}
         * @param addonVersion Property addonVersion: The version of the add-on. This parameter is required.
         */
        public Builder addonVersion(final java.lang.String addonVersion) {
            this.props.addonVersion(addonVersion);
            return this;
        }
        /**
         * Property addonVersion: The version of the add-on.
         * <p>
         * @return {@code this}
         * @param addonVersion Property addonVersion: The version of the add-on. This parameter is required.
         */
        public Builder addonVersion(final com.aliyun.ros.cdk.core.IResolvable addonVersion) {
            this.props.addonVersion(addonVersion);
            return this;
        }

        /**
         * Property policyId: The ID of the integration policy.
         * <p>
         * @return {@code this}
         * @param policyId Property policyId: The ID of the integration policy. This parameter is required.
         */
        public Builder policyId(final java.lang.String policyId) {
            this.props.policyId(policyId);
            return this;
        }
        /**
         * Property policyId: The ID of the integration policy.
         * <p>
         * @return {@code this}
         * @param policyId Property policyId: The ID of the integration policy. This parameter is required.
         */
        public Builder policyId(final com.aliyun.ros.cdk.core.IResolvable policyId) {
            this.props.policyId(policyId);
            return this;
        }

        /**
         * Property entityRules: Entity discovery rules model.
         * <p>
         * @return {@code this}
         * @param entityRules Property entityRules: Entity discovery rules model. This parameter is required.
         */
        public Builder entityRules(final com.aliyun.ros.cdk.core.IResolvable entityRules) {
            this.props.entityRules(entityRules);
            return this;
        }
        /**
         * Property entityRules: Entity discovery rules model.
         * <p>
         * @return {@code this}
         * @param entityRules Property entityRules: Entity discovery rules model. This parameter is required.
         */
        public Builder entityRules(final com.aliyun.ros.cdk.cms2.RosAddonRelease.EntityRulesProperty entityRules) {
            this.props.entityRules(entityRules);
            return this;
        }

        /**
         * Property envType: The environment type.
         * <p>
         * @return {@code this}
         * @param envType Property envType: The environment type. This parameter is required.
         */
        public Builder envType(final java.lang.String envType) {
            this.props.envType(envType);
            return this;
        }
        /**
         * Property envType: The environment type.
         * <p>
         * @return {@code this}
         * @param envType Property envType: The environment type. This parameter is required.
         */
        public Builder envType(final com.aliyun.ros.cdk.core.IResolvable envType) {
            this.props.envType(envType);
            return this;
        }

        /**
         * Property lang: The language of the add-on.
         * <p>
         * @return {@code this}
         * @param lang Property lang: The language of the add-on. This parameter is required.
         */
        public Builder lang(final java.lang.String lang) {
            this.props.lang(lang);
            return this;
        }
        /**
         * Property lang: The language of the add-on.
         * <p>
         * @return {@code this}
         * @param lang Property lang: The language of the add-on. This parameter is required.
         */
        public Builder lang(final com.aliyun.ros.cdk.core.IResolvable lang) {
            this.props.lang(lang);
            return this;
        }

        /**
         * Property parentAddonReleaseId: The ID of the parent add-on release.
         * <p>
         * @return {@code this}
         * @param parentAddonReleaseId Property parentAddonReleaseId: The ID of the parent add-on release. This parameter is required.
         */
        public Builder parentAddonReleaseId(final java.lang.String parentAddonReleaseId) {
            this.props.parentAddonReleaseId(parentAddonReleaseId);
            return this;
        }
        /**
         * Property parentAddonReleaseId: The ID of the parent add-on release.
         * <p>
         * @return {@code this}
         * @param parentAddonReleaseId Property parentAddonReleaseId: The ID of the parent add-on release. This parameter is required.
         */
        public Builder parentAddonReleaseId(final com.aliyun.ros.cdk.core.IResolvable parentAddonReleaseId) {
            this.props.parentAddonReleaseId(parentAddonReleaseId);
            return this;
        }

        /**
         * Property releaseName: The name of the add-on release.
         * <p>
         * @return {@code this}
         * @param releaseName Property releaseName: The name of the add-on release. This parameter is required.
         */
        public Builder releaseName(final java.lang.String releaseName) {
            this.props.releaseName(releaseName);
            return this;
        }
        /**
         * Property releaseName: The name of the add-on release.
         * <p>
         * @return {@code this}
         * @param releaseName Property releaseName: The name of the add-on release. This parameter is required.
         */
        public Builder releaseName(final com.aliyun.ros.cdk.core.IResolvable releaseName) {
            this.props.releaseName(releaseName);
            return this;
        }

        /**
         * Property values: The values of the add-on release.
         * <p>
         * @return {@code this}
         * @param values Property values: The values of the add-on release. This parameter is required.
         */
        public Builder values(final com.aliyun.ros.cdk.core.IResolvable values) {
            this.props.values(values);
            return this;
        }
        /**
         * Property values: The values of the add-on release.
         * <p>
         * @return {@code this}
         * @param values Property values: The values of the add-on release. This parameter is required.
         */
        public Builder values(final java.util.Map<java.lang.String, ? extends java.lang.Object> values) {
            this.props.values(values);
            return this;
        }

        /**
         * Property workspace: The workspace of the add-on release.
         * <p>
         * @return {@code this}
         * @param workspace Property workspace: The workspace of the add-on release. This parameter is required.
         */
        public Builder workspace(final java.lang.String workspace) {
            this.props.workspace(workspace);
            return this;
        }
        /**
         * Property workspace: The workspace of the add-on release.
         * <p>
         * @return {@code this}
         * @param workspace Property workspace: The workspace of the add-on release. This parameter is required.
         */
        public Builder workspace(final com.aliyun.ros.cdk.core.IResolvable workspace) {
            this.props.workspace(workspace);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms2.AddonRelease}.
         */
        @Override
        public com.aliyun.ros.cdk.cms2.AddonRelease build() {
            return new com.aliyun.ros.cdk.cms2.AddonRelease(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
