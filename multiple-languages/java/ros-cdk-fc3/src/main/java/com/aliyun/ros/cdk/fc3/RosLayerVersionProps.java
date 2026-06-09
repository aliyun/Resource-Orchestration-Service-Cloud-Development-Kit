package com.aliyun.ros.cdk.fc3;

/**
 * Properties for defining a <code>RosLayerVersion</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-layerversion
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:03:30.907Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosLayerVersionProps")
@software.amazon.jsii.Jsii.Proxy(RosLayerVersionProps.Jsii$Proxy.class)
public interface RosLayerVersionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLayerName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCompatibleRuntime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLicense() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosLayerVersionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosLayerVersionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosLayerVersionProps> {
        java.lang.Object layerName;
        java.lang.Object acl;
        java.lang.Object code;
        java.lang.Object compatibleRuntime;
        java.lang.Object description;
        java.lang.Object license;

        /**
         * Sets the value of {@link RosLayerVersionProps#getLayerName}
         * @param layerName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder layerName(java.lang.String layerName) {
            this.layerName = layerName;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerVersionProps#getLayerName}
         * @param layerName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder layerName(com.aliyun.ros.cdk.core.IResolvable layerName) {
            this.layerName = layerName;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerVersionProps#getAcl}
         * @param acl the value to be set.
         * @return {@code this}
         */
        public Builder acl(java.lang.String acl) {
            this.acl = acl;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerVersionProps#getAcl}
         * @param acl the value to be set.
         * @return {@code this}
         */
        public Builder acl(com.aliyun.ros.cdk.core.IResolvable acl) {
            this.acl = acl;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerVersionProps#getCode}
         * @param code the value to be set.
         * @return {@code this}
         */
        public Builder code(com.aliyun.ros.cdk.core.IResolvable code) {
            this.code = code;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerVersionProps#getCode}
         * @param code the value to be set.
         * @return {@code this}
         */
        public Builder code(com.aliyun.ros.cdk.fc3.RosLayerVersion.CodeProperty code) {
            this.code = code;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerVersionProps#getCompatibleRuntime}
         * @param compatibleRuntime the value to be set.
         * @return {@code this}
         */
        public Builder compatibleRuntime(com.aliyun.ros.cdk.core.IResolvable compatibleRuntime) {
            this.compatibleRuntime = compatibleRuntime;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerVersionProps#getCompatibleRuntime}
         * @param compatibleRuntime the value to be set.
         * @return {@code this}
         */
        public Builder compatibleRuntime(java.util.List<? extends java.lang.Object> compatibleRuntime) {
            this.compatibleRuntime = compatibleRuntime;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerVersionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerVersionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerVersionProps#getLicense}
         * @param license the value to be set.
         * @return {@code this}
         */
        public Builder license(java.lang.String license) {
            this.license = license;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerVersionProps#getLicense}
         * @param license the value to be set.
         * @return {@code this}
         */
        public Builder license(com.aliyun.ros.cdk.core.IResolvable license) {
            this.license = license;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosLayerVersionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosLayerVersionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosLayerVersionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosLayerVersionProps {
        private final java.lang.Object layerName;
        private final java.lang.Object acl;
        private final java.lang.Object code;
        private final java.lang.Object compatibleRuntime;
        private final java.lang.Object description;
        private final java.lang.Object license;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.layerName = software.amazon.jsii.Kernel.get(this, "layerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.acl = software.amazon.jsii.Kernel.get(this, "acl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.code = software.amazon.jsii.Kernel.get(this, "code", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.compatibleRuntime = software.amazon.jsii.Kernel.get(this, "compatibleRuntime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.license = software.amazon.jsii.Kernel.get(this, "license", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.layerName = java.util.Objects.requireNonNull(builder.layerName, "layerName is required");
            this.acl = builder.acl;
            this.code = builder.code;
            this.compatibleRuntime = builder.compatibleRuntime;
            this.description = builder.description;
            this.license = builder.license;
        }

        @Override
        public final java.lang.Object getLayerName() {
            return this.layerName;
        }

        @Override
        public final java.lang.Object getAcl() {
            return this.acl;
        }

        @Override
        public final java.lang.Object getCode() {
            return this.code;
        }

        @Override
        public final java.lang.Object getCompatibleRuntime() {
            return this.compatibleRuntime;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getLicense() {
            return this.license;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("layerName", om.valueToTree(this.getLayerName()));
            if (this.getAcl() != null) {
                data.set("acl", om.valueToTree(this.getAcl()));
            }
            if (this.getCode() != null) {
                data.set("code", om.valueToTree(this.getCode()));
            }
            if (this.getCompatibleRuntime() != null) {
                data.set("compatibleRuntime", om.valueToTree(this.getCompatibleRuntime()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getLicense() != null) {
                data.set("license", om.valueToTree(this.getLicense()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosLayerVersionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosLayerVersionProps.Jsii$Proxy that = (RosLayerVersionProps.Jsii$Proxy) o;

            if (!layerName.equals(that.layerName)) return false;
            if (this.acl != null ? !this.acl.equals(that.acl) : that.acl != null) return false;
            if (this.code != null ? !this.code.equals(that.code) : that.code != null) return false;
            if (this.compatibleRuntime != null ? !this.compatibleRuntime.equals(that.compatibleRuntime) : that.compatibleRuntime != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.license != null ? this.license.equals(that.license) : that.license == null;
        }

        @Override
        public final int hashCode() {
            int result = this.layerName.hashCode();
            result = 31 * result + (this.acl != null ? this.acl.hashCode() : 0);
            result = 31 * result + (this.code != null ? this.code.hashCode() : 0);
            result = 31 * result + (this.compatibleRuntime != null ? this.compatibleRuntime.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.license != null ? this.license.hashCode() : 0);
            return result;
        }
    }
}
