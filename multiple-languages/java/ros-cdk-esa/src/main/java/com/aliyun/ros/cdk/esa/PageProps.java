package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>Page</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-page
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.605Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.PageProps")
@software.amazon.jsii.Jsii.Proxy(PageProps.Jsii$Proxy.class)
public interface PageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property contentType: The Content-Type field in the HTTP header.
     * <p>
     * Valid values:
     * text/html
     * application/json
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContentType();

    /**
     * Property pageName: The name of the custom response page.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPageName();

    /**
     * Property content: The Base64-encoded page content.
     * <p>
     * Example: "PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=", which indicates "hello page".
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContent() {
        return null;
    }

    /**
     * Property description: The description of the page.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PageProps> {
        java.lang.Object contentType;
        java.lang.Object pageName;
        java.lang.Object content;
        java.lang.Object description;

        /**
         * Sets the value of {@link PageProps#getContentType}
         * @param contentType Property contentType: The Content-Type field in the HTTP header. This parameter is required.
         *                    Valid values:
         *                    text/html
         *                    application/json
         * @return {@code this}
         */
        public Builder contentType(java.lang.String contentType) {
            this.contentType = contentType;
            return this;
        }

        /**
         * Sets the value of {@link PageProps#getContentType}
         * @param contentType Property contentType: The Content-Type field in the HTTP header. This parameter is required.
         *                    Valid values:
         *                    text/html
         *                    application/json
         * @return {@code this}
         */
        public Builder contentType(com.aliyun.ros.cdk.core.IResolvable contentType) {
            this.contentType = contentType;
            return this;
        }

        /**
         * Sets the value of {@link PageProps#getPageName}
         * @param pageName Property pageName: The name of the custom response page. This parameter is required.
         * @return {@code this}
         */
        public Builder pageName(java.lang.String pageName) {
            this.pageName = pageName;
            return this;
        }

        /**
         * Sets the value of {@link PageProps#getPageName}
         * @param pageName Property pageName: The name of the custom response page. This parameter is required.
         * @return {@code this}
         */
        public Builder pageName(com.aliyun.ros.cdk.core.IResolvable pageName) {
            this.pageName = pageName;
            return this;
        }

        /**
         * Sets the value of {@link PageProps#getContent}
         * @param content Property content: The Base64-encoded page content.
         *                Example: "PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=", which indicates "hello page".
         * @return {@code this}
         */
        public Builder content(java.lang.String content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link PageProps#getContent}
         * @param content Property content: The Base64-encoded page content.
         *                Example: "PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=", which indicates "hello page".
         * @return {@code this}
         */
        public Builder content(com.aliyun.ros.cdk.core.IResolvable content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link PageProps#getDescription}
         * @param description Property description: The description of the page.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link PageProps#getDescription}
         * @param description Property description: The description of the page.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PageProps {
        private final java.lang.Object contentType;
        private final java.lang.Object pageName;
        private final java.lang.Object content;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.contentType = software.amazon.jsii.Kernel.get(this, "contentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pageName = software.amazon.jsii.Kernel.get(this, "pageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.content = software.amazon.jsii.Kernel.get(this, "content", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.contentType = java.util.Objects.requireNonNull(builder.contentType, "contentType is required");
            this.pageName = java.util.Objects.requireNonNull(builder.pageName, "pageName is required");
            this.content = builder.content;
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getContentType() {
            return this.contentType;
        }

        @Override
        public final java.lang.Object getPageName() {
            return this.pageName;
        }

        @Override
        public final java.lang.Object getContent() {
            return this.content;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("contentType", om.valueToTree(this.getContentType()));
            data.set("pageName", om.valueToTree(this.getPageName()));
            if (this.getContent() != null) {
                data.set("content", om.valueToTree(this.getContent()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.PageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PageProps.Jsii$Proxy that = (PageProps.Jsii$Proxy) o;

            if (!contentType.equals(that.contentType)) return false;
            if (!pageName.equals(that.pageName)) return false;
            if (this.content != null ? !this.content.equals(that.content) : that.content != null) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.contentType.hashCode();
            result = 31 * result + (this.pageName.hashCode());
            result = 31 * result + (this.content != null ? this.content.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
