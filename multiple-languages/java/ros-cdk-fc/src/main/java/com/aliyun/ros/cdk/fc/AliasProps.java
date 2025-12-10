package com.aliyun.ros.cdk.fc;

/**
 * Properties for defining a <code>Alias</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-alias
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:01.760Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.AliasProps")
@software.amazon.jsii.Jsii.Proxy(AliasProps.Jsii$Proxy.class)
public interface AliasProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property aliasName: Alias name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAliasName();

    /**
     * Property serviceName: Service name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceName();

    /**
     * Property additionalVersion: Additional version.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAdditionalVersion() {
        return null;
    }

    /**
     * Property additionalWeight: Traffic weight of additional version.
     * <p>
     * From 0 to 100.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAdditionalWeight() {
        return null;
    }

    /**
     * Property description: Version description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property versionId: Version ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVersionId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AliasProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AliasProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AliasProps> {
        java.lang.Object aliasName;
        java.lang.Object serviceName;
        java.lang.Object additionalVersion;
        java.lang.Object additionalWeight;
        java.lang.Object description;
        java.lang.Object versionId;

        /**
         * Sets the value of {@link AliasProps#getAliasName}
         * @param aliasName Property aliasName: Alias name. This parameter is required.
         * @return {@code this}
         */
        public Builder aliasName(java.lang.String aliasName) {
            this.aliasName = aliasName;
            return this;
        }

        /**
         * Sets the value of {@link AliasProps#getAliasName}
         * @param aliasName Property aliasName: Alias name. This parameter is required.
         * @return {@code this}
         */
        public Builder aliasName(com.aliyun.ros.cdk.core.IResolvable aliasName) {
            this.aliasName = aliasName;
            return this;
        }

        /**
         * Sets the value of {@link AliasProps#getServiceName}
         * @param serviceName Property serviceName: Service name. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link AliasProps#getServiceName}
         * @param serviceName Property serviceName: Service name. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link AliasProps#getAdditionalVersion}
         * @param additionalVersion Property additionalVersion: Additional version.
         * @return {@code this}
         */
        public Builder additionalVersion(java.lang.String additionalVersion) {
            this.additionalVersion = additionalVersion;
            return this;
        }

        /**
         * Sets the value of {@link AliasProps#getAdditionalVersion}
         * @param additionalVersion Property additionalVersion: Additional version.
         * @return {@code this}
         */
        public Builder additionalVersion(com.aliyun.ros.cdk.core.IResolvable additionalVersion) {
            this.additionalVersion = additionalVersion;
            return this;
        }

        /**
         * Sets the value of {@link AliasProps#getAdditionalWeight}
         * @param additionalWeight Property additionalWeight: Traffic weight of additional version.
         *                         From 0 to 100.
         * @return {@code this}
         */
        public Builder additionalWeight(java.lang.Number additionalWeight) {
            this.additionalWeight = additionalWeight;
            return this;
        }

        /**
         * Sets the value of {@link AliasProps#getAdditionalWeight}
         * @param additionalWeight Property additionalWeight: Traffic weight of additional version.
         *                         From 0 to 100.
         * @return {@code this}
         */
        public Builder additionalWeight(com.aliyun.ros.cdk.core.IResolvable additionalWeight) {
            this.additionalWeight = additionalWeight;
            return this;
        }

        /**
         * Sets the value of {@link AliasProps#getDescription}
         * @param description Property description: Version description.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AliasProps#getDescription}
         * @param description Property description: Version description.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AliasProps#getVersionId}
         * @param versionId Property versionId: Version ID.
         * @return {@code this}
         */
        public Builder versionId(java.lang.String versionId) {
            this.versionId = versionId;
            return this;
        }

        /**
         * Sets the value of {@link AliasProps#getVersionId}
         * @param versionId Property versionId: Version ID.
         * @return {@code this}
         */
        public Builder versionId(com.aliyun.ros.cdk.core.IResolvable versionId) {
            this.versionId = versionId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AliasProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AliasProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AliasProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AliasProps {
        private final java.lang.Object aliasName;
        private final java.lang.Object serviceName;
        private final java.lang.Object additionalVersion;
        private final java.lang.Object additionalWeight;
        private final java.lang.Object description;
        private final java.lang.Object versionId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aliasName = software.amazon.jsii.Kernel.get(this, "aliasName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.additionalVersion = software.amazon.jsii.Kernel.get(this, "additionalVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.additionalWeight = software.amazon.jsii.Kernel.get(this, "additionalWeight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.versionId = software.amazon.jsii.Kernel.get(this, "versionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aliasName = java.util.Objects.requireNonNull(builder.aliasName, "aliasName is required");
            this.serviceName = java.util.Objects.requireNonNull(builder.serviceName, "serviceName is required");
            this.additionalVersion = builder.additionalVersion;
            this.additionalWeight = builder.additionalWeight;
            this.description = builder.description;
            this.versionId = builder.versionId;
        }

        @Override
        public final java.lang.Object getAliasName() {
            return this.aliasName;
        }

        @Override
        public final java.lang.Object getServiceName() {
            return this.serviceName;
        }

        @Override
        public final java.lang.Object getAdditionalVersion() {
            return this.additionalVersion;
        }

        @Override
        public final java.lang.Object getAdditionalWeight() {
            return this.additionalWeight;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getVersionId() {
            return this.versionId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("aliasName", om.valueToTree(this.getAliasName()));
            data.set("serviceName", om.valueToTree(this.getServiceName()));
            if (this.getAdditionalVersion() != null) {
                data.set("additionalVersion", om.valueToTree(this.getAdditionalVersion()));
            }
            if (this.getAdditionalWeight() != null) {
                data.set("additionalWeight", om.valueToTree(this.getAdditionalWeight()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getVersionId() != null) {
                data.set("versionId", om.valueToTree(this.getVersionId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.AliasProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AliasProps.Jsii$Proxy that = (AliasProps.Jsii$Proxy) o;

            if (!aliasName.equals(that.aliasName)) return false;
            if (!serviceName.equals(that.serviceName)) return false;
            if (this.additionalVersion != null ? !this.additionalVersion.equals(that.additionalVersion) : that.additionalVersion != null) return false;
            if (this.additionalWeight != null ? !this.additionalWeight.equals(that.additionalWeight) : that.additionalWeight != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.versionId != null ? this.versionId.equals(that.versionId) : that.versionId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.aliasName.hashCode();
            result = 31 * result + (this.serviceName.hashCode());
            result = 31 * result + (this.additionalVersion != null ? this.additionalVersion.hashCode() : 0);
            result = 31 * result + (this.additionalWeight != null ? this.additionalWeight.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.versionId != null ? this.versionId.hashCode() : 0);
            return result;
        }
    }
}
