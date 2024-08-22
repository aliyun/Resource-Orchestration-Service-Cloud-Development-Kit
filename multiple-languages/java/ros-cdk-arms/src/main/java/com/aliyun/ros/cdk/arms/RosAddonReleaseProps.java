package com.aliyun.ros.cdk.arms;

/**
 * Properties for defining a <code>RosAddonRelease</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:17.874Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RosAddonReleaseProps")
@software.amazon.jsii.Jsii.Proxy(RosAddonReleaseProps.Jsii$Proxy.class)
public interface RosAddonReleaseProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAddonVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnvironmentId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

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
     * @return a {@link Builder} of {@link RosAddonReleaseProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAddonReleaseProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAddonReleaseProps> {
        java.lang.Object addonVersion;
        java.lang.Object environmentId;
        java.lang.Object name;
        java.lang.Object releaseName;
        java.lang.Object values;

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
         * Sets the value of {@link RosAddonReleaseProps#getEnvironmentId}
         * @param environmentId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentId(java.lang.String environmentId) {
            this.environmentId = environmentId;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getEnvironmentId}
         * @param environmentId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentId(com.aliyun.ros.cdk.core.IResolvable environmentId) {
            this.environmentId = environmentId;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosAddonReleaseProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
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
        private final java.lang.Object addonVersion;
        private final java.lang.Object environmentId;
        private final java.lang.Object name;
        private final java.lang.Object releaseName;
        private final java.lang.Object values;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.addonVersion = software.amazon.jsii.Kernel.get(this, "addonVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.environmentId = software.amazon.jsii.Kernel.get(this, "environmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.releaseName = software.amazon.jsii.Kernel.get(this, "releaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.addonVersion = java.util.Objects.requireNonNull(builder.addonVersion, "addonVersion is required");
            this.environmentId = java.util.Objects.requireNonNull(builder.environmentId, "environmentId is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.releaseName = builder.releaseName;
            this.values = builder.values;
        }

        @Override
        public final java.lang.Object getAddonVersion() {
            return this.addonVersion;
        }

        @Override
        public final java.lang.Object getEnvironmentId() {
            return this.environmentId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("addonVersion", om.valueToTree(this.getAddonVersion()));
            data.set("environmentId", om.valueToTree(this.getEnvironmentId()));
            data.set("name", om.valueToTree(this.getName()));
            if (this.getReleaseName() != null) {
                data.set("releaseName", om.valueToTree(this.getReleaseName()));
            }
            if (this.getValues() != null) {
                data.set("values", om.valueToTree(this.getValues()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.RosAddonReleaseProps"));
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

            if (!addonVersion.equals(that.addonVersion)) return false;
            if (!environmentId.equals(that.environmentId)) return false;
            if (!name.equals(that.name)) return false;
            if (this.releaseName != null ? !this.releaseName.equals(that.releaseName) : that.releaseName != null) return false;
            return this.values != null ? this.values.equals(that.values) : that.values == null;
        }

        @Override
        public final int hashCode() {
            int result = this.addonVersion.hashCode();
            result = 31 * result + (this.environmentId.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.releaseName != null ? this.releaseName.hashCode() : 0);
            result = 31 * result + (this.values != null ? this.values.hashCode() : 0);
            return result;
        }
    }
}
