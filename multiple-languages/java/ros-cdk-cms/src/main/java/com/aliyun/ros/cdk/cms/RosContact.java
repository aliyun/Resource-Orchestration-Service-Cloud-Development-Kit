package com.aliyun.ros.cdk.cms;

/**
 * A ROS template type:  `ALIYUN::CMS::Contact`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-13T09:24:19.652Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosContact")
public class RosContact extends com.aliyun.ros.cdk.core.RosResource {

    protected RosContact(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosContact(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cms.RosContact.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::CMS::Contact`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosContact(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.RosContactProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrContactName() {
        return software.amazon.jsii.Kernel.get(this, "attrContactName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getChannels() {
        return software.amazon.jsii.Kernel.get(this, "channels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChannels(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.RosContact.ChannelsProperty value) {
        software.amazon.jsii.Kernel.set(this, "channels", java.util.Objects.requireNonNull(value, "channels is required"));
    }

    /**
     */
    public void setChannels(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "channels", java.util.Objects.requireNonNull(value, "channels is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getContactName() {
        return software.amazon.jsii.Kernel.get(this, "contactName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContactName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "contactName", java.util.Objects.requireNonNull(value, "contactName is required"));
    }

    /**
     */
    public void setContactName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "contactName", java.util.Objects.requireNonNull(value, "contactName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDescribe() {
        return software.amazon.jsii.Kernel.get(this, "describe", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescribe(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "describe", java.util.Objects.requireNonNull(value, "describe is required"));
    }

    /**
     */
    public void setDescribe(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "describe", java.util.Objects.requireNonNull(value, "describe is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosContact.ChannelsProperty")
    @software.amazon.jsii.Jsii.Proxy(ChannelsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ChannelsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAliIm() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDingWebHook() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMail() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSms() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ChannelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ChannelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ChannelsProperty> {
            java.lang.Object aliIm;
            java.lang.Object dingWebHook;
            java.lang.Object mail;
            java.lang.Object sms;

            /**
             * Sets the value of {@link ChannelsProperty#getAliIm}
             * @param aliIm the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aliIm(java.lang.String aliIm) {
                this.aliIm = aliIm;
                return this;
            }

            /**
             * Sets the value of {@link ChannelsProperty#getAliIm}
             * @param aliIm the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aliIm(com.aliyun.ros.cdk.core.IResolvable aliIm) {
                this.aliIm = aliIm;
                return this;
            }

            /**
             * Sets the value of {@link ChannelsProperty#getDingWebHook}
             * @param dingWebHook the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dingWebHook(java.lang.String dingWebHook) {
                this.dingWebHook = dingWebHook;
                return this;
            }

            /**
             * Sets the value of {@link ChannelsProperty#getDingWebHook}
             * @param dingWebHook the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dingWebHook(com.aliyun.ros.cdk.core.IResolvable dingWebHook) {
                this.dingWebHook = dingWebHook;
                return this;
            }

            /**
             * Sets the value of {@link ChannelsProperty#getMail}
             * @param mail the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mail(java.lang.String mail) {
                this.mail = mail;
                return this;
            }

            /**
             * Sets the value of {@link ChannelsProperty#getMail}
             * @param mail the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mail(com.aliyun.ros.cdk.core.IResolvable mail) {
                this.mail = mail;
                return this;
            }

            /**
             * Sets the value of {@link ChannelsProperty#getSms}
             * @param sms the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sms(java.lang.String sms) {
                this.sms = sms;
                return this;
            }

            /**
             * Sets the value of {@link ChannelsProperty#getSms}
             * @param sms the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sms(com.aliyun.ros.cdk.core.IResolvable sms) {
                this.sms = sms;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ChannelsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ChannelsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ChannelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ChannelsProperty {
            private final java.lang.Object aliIm;
            private final java.lang.Object dingWebHook;
            private final java.lang.Object mail;
            private final java.lang.Object sms;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.aliIm = software.amazon.jsii.Kernel.get(this, "aliIm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dingWebHook = software.amazon.jsii.Kernel.get(this, "dingWebHook", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mail = software.amazon.jsii.Kernel.get(this, "mail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sms = software.amazon.jsii.Kernel.get(this, "sms", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.aliIm = builder.aliIm;
                this.dingWebHook = builder.dingWebHook;
                this.mail = builder.mail;
                this.sms = builder.sms;
            }

            @Override
            public final java.lang.Object getAliIm() {
                return this.aliIm;
            }

            @Override
            public final java.lang.Object getDingWebHook() {
                return this.dingWebHook;
            }

            @Override
            public final java.lang.Object getMail() {
                return this.mail;
            }

            @Override
            public final java.lang.Object getSms() {
                return this.sms;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAliIm() != null) {
                    data.set("aliIm", om.valueToTree(this.getAliIm()));
                }
                if (this.getDingWebHook() != null) {
                    data.set("dingWebHook", om.valueToTree(this.getDingWebHook()));
                }
                if (this.getMail() != null) {
                    data.set("mail", om.valueToTree(this.getMail()));
                }
                if (this.getSms() != null) {
                    data.set("sms", om.valueToTree(this.getSms()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosContact.ChannelsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ChannelsProperty.Jsii$Proxy that = (ChannelsProperty.Jsii$Proxy) o;

                if (this.aliIm != null ? !this.aliIm.equals(that.aliIm) : that.aliIm != null) return false;
                if (this.dingWebHook != null ? !this.dingWebHook.equals(that.dingWebHook) : that.dingWebHook != null) return false;
                if (this.mail != null ? !this.mail.equals(that.mail) : that.mail != null) return false;
                return this.sms != null ? this.sms.equals(that.sms) : that.sms == null;
            }

            @Override
            public final int hashCode() {
                int result = this.aliIm != null ? this.aliIm.hashCode() : 0;
                result = 31 * result + (this.dingWebHook != null ? this.dingWebHook.hashCode() : 0);
                result = 31 * result + (this.mail != null ? this.mail.hashCode() : 0);
                result = 31 * result + (this.sms != null ? this.sms.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.RosContact}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.RosContact> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cms.RosContactProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.RosContactProps.Builder();
        }

        /**
         * @return {@code this}
         * @param channels This parameter is required.
         */
        public Builder channels(final com.aliyun.ros.cdk.cms.RosContact.ChannelsProperty channels) {
            this.props.channels(channels);
            return this;
        }
        /**
         * @return {@code this}
         * @param channels This parameter is required.
         */
        public Builder channels(final com.aliyun.ros.cdk.core.IResolvable channels) {
            this.props.channels(channels);
            return this;
        }

        /**
         * @return {@code this}
         * @param contactName This parameter is required.
         */
        public Builder contactName(final java.lang.String contactName) {
            this.props.contactName(contactName);
            return this;
        }
        /**
         * @return {@code this}
         * @param contactName This parameter is required.
         */
        public Builder contactName(final com.aliyun.ros.cdk.core.IResolvable contactName) {
            this.props.contactName(contactName);
            return this;
        }

        /**
         * @return {@code this}
         * @param describe This parameter is required.
         */
        public Builder describe(final java.lang.String describe) {
            this.props.describe(describe);
            return this;
        }
        /**
         * @return {@code this}
         * @param describe This parameter is required.
         */
        public Builder describe(final com.aliyun.ros.cdk.core.IResolvable describe) {
            this.props.describe(describe);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cms.RosContact}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.RosContact build() {
            return new com.aliyun.ros.cdk.cms.RosContact(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
