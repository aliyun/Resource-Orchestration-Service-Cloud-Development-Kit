package com.aliyun.ros.cdk.ice;

/**
 * Properties for defining a <code>RosCategory</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-category
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.703Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ice.$Module.class, fqn = "@alicloud/ros-cdk-ice.RosCategoryProps")
@software.amazon.jsii.Jsii.Proxy(RosCategoryProps.Jsii$Proxy.class)
public interface RosCategoryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCateName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParentId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCategoryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCategoryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCategoryProps> {
        java.lang.Object cateName;
        java.lang.Object parentId;
        java.lang.Object type;

        /**
         * Sets the value of {@link RosCategoryProps#getCateName}
         * @param cateName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cateName(java.lang.String cateName) {
            this.cateName = cateName;
            return this;
        }

        /**
         * Sets the value of {@link RosCategoryProps#getCateName}
         * @param cateName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cateName(com.aliyun.ros.cdk.core.IResolvable cateName) {
            this.cateName = cateName;
            return this;
        }

        /**
         * Sets the value of {@link RosCategoryProps#getParentId}
         * @param parentId the value to be set.
         * @return {@code this}
         */
        public Builder parentId(java.lang.Number parentId) {
            this.parentId = parentId;
            return this;
        }

        /**
         * Sets the value of {@link RosCategoryProps#getParentId}
         * @param parentId the value to be set.
         * @return {@code this}
         */
        public Builder parentId(com.aliyun.ros.cdk.core.IResolvable parentId) {
            this.parentId = parentId;
            return this;
        }

        /**
         * Sets the value of {@link RosCategoryProps#getType}
         * @param type the value to be set.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosCategoryProps#getType}
         * @param type the value to be set.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCategoryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCategoryProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCategoryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCategoryProps {
        private final java.lang.Object cateName;
        private final java.lang.Object parentId;
        private final java.lang.Object type;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cateName = software.amazon.jsii.Kernel.get(this, "cateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parentId = software.amazon.jsii.Kernel.get(this, "parentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cateName = java.util.Objects.requireNonNull(builder.cateName, "cateName is required");
            this.parentId = builder.parentId;
            this.type = builder.type;
        }

        @Override
        public final java.lang.Object getCateName() {
            return this.cateName;
        }

        @Override
        public final java.lang.Object getParentId() {
            return this.parentId;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cateName", om.valueToTree(this.getCateName()));
            if (this.getParentId() != null) {
                data.set("parentId", om.valueToTree(this.getParentId()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ice.RosCategoryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCategoryProps.Jsii$Proxy that = (RosCategoryProps.Jsii$Proxy) o;

            if (!cateName.equals(that.cateName)) return false;
            if (this.parentId != null ? !this.parentId.equals(that.parentId) : that.parentId != null) return false;
            return this.type != null ? this.type.equals(that.type) : that.type == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cateName.hashCode();
            result = 31 * result + (this.parentId != null ? this.parentId.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            return result;
        }
    }
}
