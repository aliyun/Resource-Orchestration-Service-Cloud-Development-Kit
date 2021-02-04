package com.aliyun.ros.cdk.fc;

/**
 * Properties for defining a `ALIYUN::FC::Alias`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.945Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosAliasProps")
@software.amazon.jsii.Jsii.Proxy(RosAliasProps.Jsii$Proxy.class)
public interface RosAliasProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAliasName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getServiceName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAdditionalVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getAdditionalWeight() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVersionId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAliasProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAliasProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAliasProps> {
        private java.lang.String aliasName;
        private java.lang.String serviceName;
        private java.lang.String additionalVersion;
        private java.lang.Number additionalWeight;
        private java.lang.String description;
        private java.lang.String versionId;

        /**
         * Sets the value of {@link RosAliasProps#getAliasName}
         * @param aliasName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aliasName(java.lang.String aliasName) {
            this.aliasName = aliasName;
            return this;
        }

        /**
         * Sets the value of {@link RosAliasProps#getServiceName}
         * @param serviceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link RosAliasProps#getAdditionalVersion}
         * @param additionalVersion the value to be set.
         * @return {@code this}
         */
        public Builder additionalVersion(java.lang.String additionalVersion) {
            this.additionalVersion = additionalVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosAliasProps#getAdditionalWeight}
         * @param additionalWeight the value to be set.
         * @return {@code this}
         */
        public Builder additionalWeight(java.lang.Number additionalWeight) {
            this.additionalWeight = additionalWeight;
            return this;
        }

        /**
         * Sets the value of {@link RosAliasProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAliasProps#getVersionId}
         * @param versionId the value to be set.
         * @return {@code this}
         */
        public Builder versionId(java.lang.String versionId) {
            this.versionId = versionId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAliasProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAliasProps build() {
            return new Jsii$Proxy(aliasName, serviceName, additionalVersion, additionalWeight, description, versionId);
        }
    }

    /**
     * An implementation for {@link RosAliasProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAliasProps {
        private final java.lang.String aliasName;
        private final java.lang.String serviceName;
        private final java.lang.String additionalVersion;
        private final java.lang.Number additionalWeight;
        private final java.lang.String description;
        private final java.lang.String versionId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aliasName = software.amazon.jsii.Kernel.get(this, "aliasName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.additionalVersion = software.amazon.jsii.Kernel.get(this, "additionalVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.additionalWeight = software.amazon.jsii.Kernel.get(this, "additionalWeight", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.versionId = software.amazon.jsii.Kernel.get(this, "versionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String aliasName, final java.lang.String serviceName, final java.lang.String additionalVersion, final java.lang.Number additionalWeight, final java.lang.String description, final java.lang.String versionId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aliasName = java.util.Objects.requireNonNull(aliasName, "aliasName is required");
            this.serviceName = java.util.Objects.requireNonNull(serviceName, "serviceName is required");
            this.additionalVersion = additionalVersion;
            this.additionalWeight = additionalWeight;
            this.description = description;
            this.versionId = versionId;
        }

        @Override
        public final java.lang.String getAliasName() {
            return this.aliasName;
        }

        @Override
        public final java.lang.String getServiceName() {
            return this.serviceName;
        }

        @Override
        public final java.lang.String getAdditionalVersion() {
            return this.additionalVersion;
        }

        @Override
        public final java.lang.Number getAdditionalWeight() {
            return this.additionalWeight;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getVersionId() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosAliasProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAliasProps.Jsii$Proxy that = (RosAliasProps.Jsii$Proxy) o;

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
