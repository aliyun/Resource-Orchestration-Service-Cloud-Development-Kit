package com.aliyun.ros.cdk.maxcompute;

/**
 * Properties for defining a <code>Project</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:56.087Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.maxcompute.$Module.class, fqn = "@alicloud/ros-cdk-maxcompute.ProjectProps")
@software.amazon.jsii.Jsii.Proxy(ProjectProps.Jsii$Proxy.class)
public interface ProjectProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property name: The name of the project.
     * <p>
     * It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property chargeType: Quota payment type, support PayAsYouGo, Subscription.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property comment: The comments of project.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComment() {
        return null;
    }

    /**
     * Property defaultQuota: Default Computing Resource Group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultQuota() {
        return null;
    }

    /**
     * Property ipWhiteList: IP whitelist.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpWhiteList() {
        return null;
    }

    /**
     * Property properties: Project base attributes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProperties() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ProjectProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ProjectProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ProjectProps> {
        java.lang.Object name;
        java.lang.Object chargeType;
        java.lang.Object comment;
        java.lang.Object defaultQuota;
        java.lang.Object ipWhiteList;
        java.lang.Object properties;

        /**
         * Sets the value of {@link ProjectProps#getName}
         * @param name Property name: The name of the project. This parameter is required.
         *             It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getName}
         * @param name Property name: The name of the project. This parameter is required.
         *             It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getChargeType}
         * @param chargeType Property chargeType: Quota payment type, support PayAsYouGo, Subscription.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getChargeType}
         * @param chargeType Property chargeType: Quota payment type, support PayAsYouGo, Subscription.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getComment}
         * @param comment Property comment: The comments of project.
         * @return {@code this}
         */
        public Builder comment(java.lang.String comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getComment}
         * @param comment Property comment: The comments of project.
         * @return {@code this}
         */
        public Builder comment(com.aliyun.ros.cdk.core.IResolvable comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getDefaultQuota}
         * @param defaultQuota Property defaultQuota: Default Computing Resource Group.
         * @return {@code this}
         */
        public Builder defaultQuota(java.lang.String defaultQuota) {
            this.defaultQuota = defaultQuota;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getDefaultQuota}
         * @param defaultQuota Property defaultQuota: Default Computing Resource Group.
         * @return {@code this}
         */
        public Builder defaultQuota(com.aliyun.ros.cdk.core.IResolvable defaultQuota) {
            this.defaultQuota = defaultQuota;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getIpWhiteList}
         * @param ipWhiteList Property ipWhiteList: IP whitelist.
         * @return {@code this}
         */
        public Builder ipWhiteList(com.aliyun.ros.cdk.core.IResolvable ipWhiteList) {
            this.ipWhiteList = ipWhiteList;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getIpWhiteList}
         * @param ipWhiteList Property ipWhiteList: IP whitelist.
         * @return {@code this}
         */
        public Builder ipWhiteList(com.aliyun.ros.cdk.maxcompute.RosProject.IpWhiteListProperty ipWhiteList) {
            this.ipWhiteList = ipWhiteList;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProperties}
         * @param properties Property properties: Project base attributes.
         * @return {@code this}
         */
        public Builder properties(com.aliyun.ros.cdk.core.IResolvable properties) {
            this.properties = properties;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProperties}
         * @param properties Property properties: Project base attributes.
         * @return {@code this}
         */
        public Builder properties(com.aliyun.ros.cdk.maxcompute.RosProject.PropertiesProperty properties) {
            this.properties = properties;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ProjectProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ProjectProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ProjectProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ProjectProps {
        private final java.lang.Object name;
        private final java.lang.Object chargeType;
        private final java.lang.Object comment;
        private final java.lang.Object defaultQuota;
        private final java.lang.Object ipWhiteList;
        private final java.lang.Object properties;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.comment = software.amazon.jsii.Kernel.get(this, "comment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultQuota = software.amazon.jsii.Kernel.get(this, "defaultQuota", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipWhiteList = software.amazon.jsii.Kernel.get(this, "ipWhiteList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.properties = software.amazon.jsii.Kernel.get(this, "properties", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.chargeType = builder.chargeType;
            this.comment = builder.comment;
            this.defaultQuota = builder.defaultQuota;
            this.ipWhiteList = builder.ipWhiteList;
            this.properties = builder.properties;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getComment() {
            return this.comment;
        }

        @Override
        public final java.lang.Object getDefaultQuota() {
            return this.defaultQuota;
        }

        @Override
        public final java.lang.Object getIpWhiteList() {
            return this.ipWhiteList;
        }

        @Override
        public final java.lang.Object getProperties() {
            return this.properties;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getComment() != null) {
                data.set("comment", om.valueToTree(this.getComment()));
            }
            if (this.getDefaultQuota() != null) {
                data.set("defaultQuota", om.valueToTree(this.getDefaultQuota()));
            }
            if (this.getIpWhiteList() != null) {
                data.set("ipWhiteList", om.valueToTree(this.getIpWhiteList()));
            }
            if (this.getProperties() != null) {
                data.set("properties", om.valueToTree(this.getProperties()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-maxcompute.ProjectProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ProjectProps.Jsii$Proxy that = (ProjectProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.comment != null ? !this.comment.equals(that.comment) : that.comment != null) return false;
            if (this.defaultQuota != null ? !this.defaultQuota.equals(that.defaultQuota) : that.defaultQuota != null) return false;
            if (this.ipWhiteList != null ? !this.ipWhiteList.equals(that.ipWhiteList) : that.ipWhiteList != null) return false;
            return this.properties != null ? this.properties.equals(that.properties) : that.properties == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.comment != null ? this.comment.hashCode() : 0);
            result = 31 * result + (this.defaultQuota != null ? this.defaultQuota.hashCode() : 0);
            result = 31 * result + (this.ipWhiteList != null ? this.ipWhiteList.hashCode() : 0);
            result = 31 * result + (this.properties != null ? this.properties.hashCode() : 0);
            return result;
        }
    }
}
