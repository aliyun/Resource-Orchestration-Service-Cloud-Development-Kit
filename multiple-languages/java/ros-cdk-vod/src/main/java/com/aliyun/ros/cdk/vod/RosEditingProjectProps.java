package com.aliyun.ros.cdk.vod;

/**
 * Properties for defining a <code>ALIYUN::VOD::EditingProject</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:11.845Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vod.$Module.class, fqn = "@alicloud/ros-cdk-vod.RosEditingProjectProps")
@software.amazon.jsii.Jsii.Proxy(RosEditingProjectProps.Jsii$Proxy.class)
public interface RosEditingProjectProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTitle();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEditingProjectName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeline() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosEditingProjectProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosEditingProjectProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosEditingProjectProps> {
        java.lang.Object title;
        java.lang.Object editingProjectName;
        java.lang.Object timeline;

        /**
         * Sets the value of {@link RosEditingProjectProps#getTitle}
         * @param title the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder title(java.lang.String title) {
            this.title = title;
            return this;
        }

        /**
         * Sets the value of {@link RosEditingProjectProps#getTitle}
         * @param title the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder title(com.aliyun.ros.cdk.core.IResolvable title) {
            this.title = title;
            return this;
        }

        /**
         * Sets the value of {@link RosEditingProjectProps#getEditingProjectName}
         * @param editingProjectName the value to be set.
         * @return {@code this}
         */
        public Builder editingProjectName(java.lang.String editingProjectName) {
            this.editingProjectName = editingProjectName;
            return this;
        }

        /**
         * Sets the value of {@link RosEditingProjectProps#getEditingProjectName}
         * @param editingProjectName the value to be set.
         * @return {@code this}
         */
        public Builder editingProjectName(com.aliyun.ros.cdk.core.IResolvable editingProjectName) {
            this.editingProjectName = editingProjectName;
            return this;
        }

        /**
         * Sets the value of {@link RosEditingProjectProps#getTimeline}
         * @param timeline the value to be set.
         * @return {@code this}
         */
        public Builder timeline(java.lang.String timeline) {
            this.timeline = timeline;
            return this;
        }

        /**
         * Sets the value of {@link RosEditingProjectProps#getTimeline}
         * @param timeline the value to be set.
         * @return {@code this}
         */
        public Builder timeline(com.aliyun.ros.cdk.core.IResolvable timeline) {
            this.timeline = timeline;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosEditingProjectProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosEditingProjectProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosEditingProjectProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosEditingProjectProps {
        private final java.lang.Object title;
        private final java.lang.Object editingProjectName;
        private final java.lang.Object timeline;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.title = software.amazon.jsii.Kernel.get(this, "title", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.editingProjectName = software.amazon.jsii.Kernel.get(this, "editingProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeline = software.amazon.jsii.Kernel.get(this, "timeline", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.title = java.util.Objects.requireNonNull(builder.title, "title is required");
            this.editingProjectName = builder.editingProjectName;
            this.timeline = builder.timeline;
        }

        @Override
        public final java.lang.Object getTitle() {
            return this.title;
        }

        @Override
        public final java.lang.Object getEditingProjectName() {
            return this.editingProjectName;
        }

        @Override
        public final java.lang.Object getTimeline() {
            return this.timeline;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("title", om.valueToTree(this.getTitle()));
            if (this.getEditingProjectName() != null) {
                data.set("editingProjectName", om.valueToTree(this.getEditingProjectName()));
            }
            if (this.getTimeline() != null) {
                data.set("timeline", om.valueToTree(this.getTimeline()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vod.RosEditingProjectProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosEditingProjectProps.Jsii$Proxy that = (RosEditingProjectProps.Jsii$Proxy) o;

            if (!title.equals(that.title)) return false;
            if (this.editingProjectName != null ? !this.editingProjectName.equals(that.editingProjectName) : that.editingProjectName != null) return false;
            return this.timeline != null ? this.timeline.equals(that.timeline) : that.timeline == null;
        }

        @Override
        public final int hashCode() {
            int result = this.title.hashCode();
            result = 31 * result + (this.editingProjectName != null ? this.editingProjectName.hashCode() : 0);
            result = 31 * result + (this.timeline != null ? this.timeline.hashCode() : 0);
            return result;
        }
    }
}
