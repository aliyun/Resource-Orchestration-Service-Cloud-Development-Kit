package com.aliyun.ros.cdk.vod.datasource;

/**
 * Properties for defining a <code>RosEditingProjects</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingprojects
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:00.845Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vod.$Module.class, fqn = "@alicloud/ros-cdk-vod.datasource.RosEditingProjectsProps")
@software.amazon.jsii.Jsii.Proxy(RosEditingProjectsProps.Jsii$Proxy.class)
public interface RosEditingProjectsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTitle() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosEditingProjectsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosEditingProjectsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosEditingProjectsProps> {
        java.lang.Object refreshOptions;
        java.lang.Object title;

        /**
         * Sets the value of {@link RosEditingProjectsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosEditingProjectsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosEditingProjectsProps#getTitle}
         * @param title the value to be set.
         * @return {@code this}
         */
        public Builder title(java.lang.String title) {
            this.title = title;
            return this;
        }

        /**
         * Sets the value of {@link RosEditingProjectsProps#getTitle}
         * @param title the value to be set.
         * @return {@code this}
         */
        public Builder title(com.aliyun.ros.cdk.core.IResolvable title) {
            this.title = title;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosEditingProjectsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosEditingProjectsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosEditingProjectsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosEditingProjectsProps {
        private final java.lang.Object refreshOptions;
        private final java.lang.Object title;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.title = software.amazon.jsii.Kernel.get(this, "title", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.refreshOptions = builder.refreshOptions;
            this.title = builder.title;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getTitle() {
            return this.title;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getTitle() != null) {
                data.set("title", om.valueToTree(this.getTitle()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vod.datasource.RosEditingProjectsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosEditingProjectsProps.Jsii$Proxy that = (RosEditingProjectsProps.Jsii$Proxy) o;

            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.title != null ? this.title.equals(that.title) : that.title == null;
        }

        @Override
        public final int hashCode() {
            int result = this.refreshOptions != null ? this.refreshOptions.hashCode() : 0;
            result = 31 * result + (this.title != null ? this.title.hashCode() : 0);
            return result;
        }
    }
}
