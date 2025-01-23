package com.aliyun.ros.cdk.ice;

/**
 * Properties for defining a <code>RosInsertMediaToSearchLib</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-insertmediatosearchlib
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:40.877Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ice.$Module.class, fqn = "@alicloud/ros-cdk-ice.RosInsertMediaToSearchLibProps")
@software.amazon.jsii.Jsii.Proxy(RosInsertMediaToSearchLibProps.Jsii$Proxy.class)
public interface RosInsertMediaToSearchLibProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInput();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMediaId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMediaType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMsgBody() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSearchLibName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInsertMediaToSearchLibProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInsertMediaToSearchLibProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInsertMediaToSearchLibProps> {
        java.lang.Object input;
        java.lang.Object mediaId;
        java.lang.Object mediaType;
        java.lang.Object msgBody;
        java.lang.Object searchLibName;

        /**
         * Sets the value of {@link RosInsertMediaToSearchLibProps#getInput}
         * @param input the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder input(java.lang.String input) {
            this.input = input;
            return this;
        }

        /**
         * Sets the value of {@link RosInsertMediaToSearchLibProps#getInput}
         * @param input the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder input(com.aliyun.ros.cdk.core.IResolvable input) {
            this.input = input;
            return this;
        }

        /**
         * Sets the value of {@link RosInsertMediaToSearchLibProps#getMediaId}
         * @param mediaId the value to be set.
         * @return {@code this}
         */
        public Builder mediaId(java.lang.String mediaId) {
            this.mediaId = mediaId;
            return this;
        }

        /**
         * Sets the value of {@link RosInsertMediaToSearchLibProps#getMediaId}
         * @param mediaId the value to be set.
         * @return {@code this}
         */
        public Builder mediaId(com.aliyun.ros.cdk.core.IResolvable mediaId) {
            this.mediaId = mediaId;
            return this;
        }

        /**
         * Sets the value of {@link RosInsertMediaToSearchLibProps#getMediaType}
         * @param mediaType the value to be set.
         * @return {@code this}
         */
        public Builder mediaType(java.lang.String mediaType) {
            this.mediaType = mediaType;
            return this;
        }

        /**
         * Sets the value of {@link RosInsertMediaToSearchLibProps#getMediaType}
         * @param mediaType the value to be set.
         * @return {@code this}
         */
        public Builder mediaType(com.aliyun.ros.cdk.core.IResolvable mediaType) {
            this.mediaType = mediaType;
            return this;
        }

        /**
         * Sets the value of {@link RosInsertMediaToSearchLibProps#getMsgBody}
         * @param msgBody the value to be set.
         * @return {@code this}
         */
        public Builder msgBody(com.aliyun.ros.cdk.core.IResolvable msgBody) {
            this.msgBody = msgBody;
            return this;
        }

        /**
         * Sets the value of {@link RosInsertMediaToSearchLibProps#getMsgBody}
         * @param msgBody the value to be set.
         * @return {@code this}
         */
        public Builder msgBody(java.util.Map<java.lang.String, ? extends java.lang.Object> msgBody) {
            this.msgBody = msgBody;
            return this;
        }

        /**
         * Sets the value of {@link RosInsertMediaToSearchLibProps#getSearchLibName}
         * @param searchLibName the value to be set.
         * @return {@code this}
         */
        public Builder searchLibName(java.lang.String searchLibName) {
            this.searchLibName = searchLibName;
            return this;
        }

        /**
         * Sets the value of {@link RosInsertMediaToSearchLibProps#getSearchLibName}
         * @param searchLibName the value to be set.
         * @return {@code this}
         */
        public Builder searchLibName(com.aliyun.ros.cdk.core.IResolvable searchLibName) {
            this.searchLibName = searchLibName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInsertMediaToSearchLibProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInsertMediaToSearchLibProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInsertMediaToSearchLibProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInsertMediaToSearchLibProps {
        private final java.lang.Object input;
        private final java.lang.Object mediaId;
        private final java.lang.Object mediaType;
        private final java.lang.Object msgBody;
        private final java.lang.Object searchLibName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.input = software.amazon.jsii.Kernel.get(this, "input", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mediaId = software.amazon.jsii.Kernel.get(this, "mediaId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mediaType = software.amazon.jsii.Kernel.get(this, "mediaType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.msgBody = software.amazon.jsii.Kernel.get(this, "msgBody", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.searchLibName = software.amazon.jsii.Kernel.get(this, "searchLibName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.input = java.util.Objects.requireNonNull(builder.input, "input is required");
            this.mediaId = builder.mediaId;
            this.mediaType = builder.mediaType;
            this.msgBody = builder.msgBody;
            this.searchLibName = builder.searchLibName;
        }

        @Override
        public final java.lang.Object getInput() {
            return this.input;
        }

        @Override
        public final java.lang.Object getMediaId() {
            return this.mediaId;
        }

        @Override
        public final java.lang.Object getMediaType() {
            return this.mediaType;
        }

        @Override
        public final java.lang.Object getMsgBody() {
            return this.msgBody;
        }

        @Override
        public final java.lang.Object getSearchLibName() {
            return this.searchLibName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("input", om.valueToTree(this.getInput()));
            if (this.getMediaId() != null) {
                data.set("mediaId", om.valueToTree(this.getMediaId()));
            }
            if (this.getMediaType() != null) {
                data.set("mediaType", om.valueToTree(this.getMediaType()));
            }
            if (this.getMsgBody() != null) {
                data.set("msgBody", om.valueToTree(this.getMsgBody()));
            }
            if (this.getSearchLibName() != null) {
                data.set("searchLibName", om.valueToTree(this.getSearchLibName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ice.RosInsertMediaToSearchLibProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInsertMediaToSearchLibProps.Jsii$Proxy that = (RosInsertMediaToSearchLibProps.Jsii$Proxy) o;

            if (!input.equals(that.input)) return false;
            if (this.mediaId != null ? !this.mediaId.equals(that.mediaId) : that.mediaId != null) return false;
            if (this.mediaType != null ? !this.mediaType.equals(that.mediaType) : that.mediaType != null) return false;
            if (this.msgBody != null ? !this.msgBody.equals(that.msgBody) : that.msgBody != null) return false;
            return this.searchLibName != null ? this.searchLibName.equals(that.searchLibName) : that.searchLibName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.input.hashCode();
            result = 31 * result + (this.mediaId != null ? this.mediaId.hashCode() : 0);
            result = 31 * result + (this.mediaType != null ? this.mediaType.hashCode() : 0);
            result = 31 * result + (this.msgBody != null ? this.msgBody.hashCode() : 0);
            result = 31 * result + (this.searchLibName != null ? this.searchLibName.hashCode() : 0);
            return result;
        }
    }
}
