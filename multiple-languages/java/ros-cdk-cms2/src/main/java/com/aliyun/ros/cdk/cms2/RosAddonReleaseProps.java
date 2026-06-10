package com.aliyun.ros.cdk.cms2;

/**
 * Properties for defining a <code>RosAddonRelease</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-addonrelease
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:59:01.349Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.RosAddonReleaseProps")
@software.amazon.jsii.Jsii.Proxy(RosAddonReleaseProps.Jsii$Proxy.class)
public interface RosAddonReleaseProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAddonName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAddonVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEntityRules() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnvType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLang() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParentAddonReleaseId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReleaseName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkspace() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAddonReleaseProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAddonReleaseProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAddonReleaseProps> {
        java.lang.Object addonName;
        java.lang.Object addonVersion;
        java.lang.Object policyId;
        java.lang.Object entityRules;
        java.lang.Object envType;
        java.lang.Object lang;
        java.lang.Object parentAddonReleaseId;
        java.lang.Object releaseName;
        java.lang.Object values;
        java.lang.Object workspace;

        /**
         * Sets the value of {@link RosAddonReleaseProps#getAddonName}
         * @param addonName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder addonName(java.lang.String addonName) {
            this.addonName = addonName;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getAddonName}
         * @param addonName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder addonName(com.aliyun.ros.cdk.core.IResolvable addonName) {
            this.addonName = addonName;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getAddonVersion}
         * @param addonVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder addonVersion(java.lang.String addonVersion) {
            this.addonVersion = addonVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getAddonVersion}
         * @param addonVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder addonVersion(com.aliyun.ros.cdk.core.IResolvable addonVersion) {
            this.addonVersion = addonVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getPolicyId}
         * @param policyId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyId(java.lang.String policyId) {
            this.policyId = policyId;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getPolicyId}
         * @param policyId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyId(com.aliyun.ros.cdk.core.IResolvable policyId) {
            this.policyId = policyId;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getEntityRules}
         * @param entityRules the value to be set.
         * @return {@code this}
         */
        public Builder entityRules(com.aliyun.ros.cdk.core.IResolvable entityRules) {
            this.entityRules = entityRules;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getEntityRules}
         * @param entityRules the value to be set.
         * @return {@code this}
         */
        public Builder entityRules(com.aliyun.ros.cdk.cms2.RosAddonRelease.EntityRulesProperty entityRules) {
            this.entityRules = entityRules;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getEnvType}
         * @param envType the value to be set.
         * @return {@code this}
         */
        public Builder envType(java.lang.String envType) {
            this.envType = envType;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getEnvType}
         * @param envType the value to be set.
         * @return {@code this}
         */
        public Builder envType(com.aliyun.ros.cdk.core.IResolvable envType) {
            this.envType = envType;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getLang}
         * @param lang the value to be set.
         * @return {@code this}
         */
        public Builder lang(java.lang.String lang) {
            this.lang = lang;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getLang}
         * @param lang the value to be set.
         * @return {@code this}
         */
        public Builder lang(com.aliyun.ros.cdk.core.IResolvable lang) {
            this.lang = lang;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getParentAddonReleaseId}
         * @param parentAddonReleaseId the value to be set.
         * @return {@code this}
         */
        public Builder parentAddonReleaseId(java.lang.String parentAddonReleaseId) {
            this.parentAddonReleaseId = parentAddonReleaseId;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getParentAddonReleaseId}
         * @param parentAddonReleaseId the value to be set.
         * @return {@code this}
         */
        public Builder parentAddonReleaseId(com.aliyun.ros.cdk.core.IResolvable parentAddonReleaseId) {
            this.parentAddonReleaseId = parentAddonReleaseId;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getReleaseName}
         * @param releaseName the value to be set.
         * @return {@code this}
         */
        public Builder releaseName(java.lang.String releaseName) {
            this.releaseName = releaseName;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getReleaseName}
         * @param releaseName the value to be set.
         * @return {@code this}
         */
        public Builder releaseName(com.aliyun.ros.cdk.core.IResolvable releaseName) {
            this.releaseName = releaseName;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getValues}
         * @param values the value to be set.
         * @return {@code this}
         */
        public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
            this.values = values;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getValues}
         * @param values the value to be set.
         * @return {@code this}
         */
        public Builder values(java.util.Map<java.lang.String, ? extends java.lang.Object> values) {
            this.values = values;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getWorkspace}
         * @param workspace the value to be set.
         * @return {@code this}
         */
        public Builder workspace(java.lang.String workspace) {
            this.workspace = workspace;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getWorkspace}
         * @param workspace the value to be set.
         * @return {@code this}
         */
        public Builder workspace(com.aliyun.ros.cdk.core.IResolvable workspace) {
            this.workspace = workspace;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAddonReleaseProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAddonReleaseProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAddonReleaseProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAddonReleaseProps {
        private final java.lang.Object addonName;
        private final java.lang.Object addonVersion;
        private final java.lang.Object policyId;
        private final java.lang.Object entityRules;
        private final java.lang.Object envType;
        private final java.lang.Object lang;
        private final java.lang.Object parentAddonReleaseId;
        private final java.lang.Object releaseName;
        private final java.lang.Object values;
        private final java.lang.Object workspace;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.addonName = software.amazon.jsii.Kernel.get(this, "addonName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addonVersion = software.amazon.jsii.Kernel.get(this, "addonVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyId = software.amazon.jsii.Kernel.get(this, "policyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.entityRules = software.amazon.jsii.Kernel.get(this, "entityRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.envType = software.amazon.jsii.Kernel.get(this, "envType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lang = software.amazon.jsii.Kernel.get(this, "lang", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parentAddonReleaseId = software.amazon.jsii.Kernel.get(this, "parentAddonReleaseId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.releaseName = software.amazon.jsii.Kernel.get(this, "releaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspace = software.amazon.jsii.Kernel.get(this, "workspace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.addonName = java.util.Objects.requireNonNull(builder.addonName, "addonName is required");
            this.addonVersion = java.util.Objects.requireNonNull(builder.addonVersion, "addonVersion is required");
            this.policyId = java.util.Objects.requireNonNull(builder.policyId, "policyId is required");
            this.entityRules = builder.entityRules;
            this.envType = builder.envType;
            this.lang = builder.lang;
            this.parentAddonReleaseId = builder.parentAddonReleaseId;
            this.releaseName = builder.releaseName;
            this.values = builder.values;
            this.workspace = builder.workspace;
        }

        @Override
        public final java.lang.Object getAddonName() {
            return this.addonName;
        }

        @Override
        public final java.lang.Object getAddonVersion() {
            return this.addonVersion;
        }

        @Override
        public final java.lang.Object getPolicyId() {
            return this.policyId;
        }

        @Override
        public final java.lang.Object getEntityRules() {
            return this.entityRules;
        }

        @Override
        public final java.lang.Object getEnvType() {
            return this.envType;
        }

        @Override
        public final java.lang.Object getLang() {
            return this.lang;
        }

        @Override
        public final java.lang.Object getParentAddonReleaseId() {
            return this.parentAddonReleaseId;
        }

        @Override
        public final java.lang.Object getReleaseName() {
            return this.releaseName;
        }

        @Override
        public final java.lang.Object getValues() {
            return this.values;
        }

        @Override
        public final java.lang.Object getWorkspace() {
            return this.workspace;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("addonName", om.valueToTree(this.getAddonName()));
            data.set("addonVersion", om.valueToTree(this.getAddonVersion()));
            data.set("policyId", om.valueToTree(this.getPolicyId()));
            if (this.getEntityRules() != null) {
                data.set("entityRules", om.valueToTree(this.getEntityRules()));
            }
            if (this.getEnvType() != null) {
                data.set("envType", om.valueToTree(this.getEnvType()));
            }
            if (this.getLang() != null) {
                data.set("lang", om.valueToTree(this.getLang()));
            }
            if (this.getParentAddonReleaseId() != null) {
                data.set("parentAddonReleaseId", om.valueToTree(this.getParentAddonReleaseId()));
            }
            if (this.getReleaseName() != null) {
                data.set("releaseName", om.valueToTree(this.getReleaseName()));
            }
            if (this.getValues() != null) {
                data.set("values", om.valueToTree(this.getValues()));
            }
            if (this.getWorkspace() != null) {
                data.set("workspace", om.valueToTree(this.getWorkspace()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms2.RosAddonReleaseProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAddonReleaseProps.Jsii$Proxy that = (RosAddonReleaseProps.Jsii$Proxy) o;

            if (!addonName.equals(that.addonName)) return false;
            if (!addonVersion.equals(that.addonVersion)) return false;
            if (!policyId.equals(that.policyId)) return false;
            if (this.entityRules != null ? !this.entityRules.equals(that.entityRules) : that.entityRules != null) return false;
            if (this.envType != null ? !this.envType.equals(that.envType) : that.envType != null) return false;
            if (this.lang != null ? !this.lang.equals(that.lang) : that.lang != null) return false;
            if (this.parentAddonReleaseId != null ? !this.parentAddonReleaseId.equals(that.parentAddonReleaseId) : that.parentAddonReleaseId != null) return false;
            if (this.releaseName != null ? !this.releaseName.equals(that.releaseName) : that.releaseName != null) return false;
            if (this.values != null ? !this.values.equals(that.values) : that.values != null) return false;
            return this.workspace != null ? this.workspace.equals(that.workspace) : that.workspace == null;
        }

        @Override
        public final int hashCode() {
            int result = this.addonName.hashCode();
            result = 31 * result + (this.addonVersion.hashCode());
            result = 31 * result + (this.policyId.hashCode());
            result = 31 * result + (this.entityRules != null ? this.entityRules.hashCode() : 0);
            result = 31 * result + (this.envType != null ? this.envType.hashCode() : 0);
            result = 31 * result + (this.lang != null ? this.lang.hashCode() : 0);
            result = 31 * result + (this.parentAddonReleaseId != null ? this.parentAddonReleaseId.hashCode() : 0);
            result = 31 * result + (this.releaseName != null ? this.releaseName.hashCode() : 0);
            result = 31 * result + (this.values != null ? this.values.hashCode() : 0);
            result = 31 * result + (this.workspace != null ? this.workspace.hashCode() : 0);
            return result;
        }
    }
}
