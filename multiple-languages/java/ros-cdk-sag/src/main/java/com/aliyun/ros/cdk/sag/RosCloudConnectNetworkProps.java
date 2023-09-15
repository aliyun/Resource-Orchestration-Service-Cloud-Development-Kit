package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a <code>ALIYUN::SAG::CloudConnectNetwork</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:50.324Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.RosCloudConnectNetworkProps")
@software.amazon.jsii.Jsii.Proxy(RosCloudConnectNetworkProps.Jsii$Proxy.class)
public interface RosCloudConnectNetworkProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsDefault() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.sag.RosCloudConnectNetwork.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCloudConnectNetworkProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCloudConnectNetworkProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCloudConnectNetworkProps> {
        java.lang.Object description;
        java.lang.Object isDefault;
        java.lang.Object name;
        java.util.List<com.aliyun.ros.cdk.sag.RosCloudConnectNetwork.TagsProperty> tags;

        /**
         * Sets the value of {@link RosCloudConnectNetworkProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCloudConnectNetworkProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCloudConnectNetworkProps#getIsDefault}
         * @param isDefault the value to be set.
         * @return {@code this}
         */
        public Builder isDefault(java.lang.Boolean isDefault) {
            this.isDefault = isDefault;
            return this;
        }

        /**
         * Sets the value of {@link RosCloudConnectNetworkProps#getIsDefault}
         * @param isDefault the value to be set.
         * @return {@code this}
         */
        public Builder isDefault(com.aliyun.ros.cdk.core.IResolvable isDefault) {
            this.isDefault = isDefault;
            return this;
        }

        /**
         * Sets the value of {@link RosCloudConnectNetworkProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosCloudConnectNetworkProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosCloudConnectNetworkProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.sag.RosCloudConnectNetwork.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.sag.RosCloudConnectNetwork.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCloudConnectNetworkProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCloudConnectNetworkProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCloudConnectNetworkProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCloudConnectNetworkProps {
        private final java.lang.Object description;
        private final java.lang.Object isDefault;
        private final java.lang.Object name;
        private final java.util.List<com.aliyun.ros.cdk.sag.RosCloudConnectNetwork.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isDefault = software.amazon.jsii.Kernel.get(this, "isDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sag.RosCloudConnectNetwork.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = builder.description;
            this.isDefault = builder.isDefault;
            this.name = builder.name;
            this.tags = (java.util.List<com.aliyun.ros.cdk.sag.RosCloudConnectNetwork.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getIsDefault() {
            return this.isDefault;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.sag.RosCloudConnectNetwork.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getIsDefault() != null) {
                data.set("isDefault", om.valueToTree(this.getIsDefault()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.RosCloudConnectNetworkProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCloudConnectNetworkProps.Jsii$Proxy that = (RosCloudConnectNetworkProps.Jsii$Proxy) o;

            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.isDefault != null ? !this.isDefault.equals(that.isDefault) : that.isDefault != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description != null ? this.description.hashCode() : 0;
            result = 31 * result + (this.isDefault != null ? this.isDefault.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
